"use client";

import { useState } from "react";
import { submitInquiry } from "@/lib/submitInquiry";

const EMPTY = { name: "", entity: "", aum: "", nature: "", message: "", website: "" };

function Label({ htmlFor, children, optional, required, f }) {
  return (
    <label htmlFor={htmlFor} className="eyebrow flex items-baseline justify-between gap-4 text-fg-muted">
      <span>{children}</span>
      {required && <span className="shrink-0 text-fg-subtle">{f.required}</span>}
      {optional && <span className="shrink-0 text-fg-subtle">{f.optional}</span>}
    </label>
  );
}

export default function InquiryForm({ locale, inquiry }) {
  const f = inquiry.form;
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | submitting | sent | error

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    if (values.website) return; // honeypot tripped
    setStatus("submitting");
    try {
      await submitInquiry({ ...values, locale });
      setStatus("sent");
      setValues(EMPTY);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="fade-in py-6" role="status">
        <p className="eyebrow text-fg-muted">{f.thanks}</p>
        <p className="mt-6 font-display text-3xl leading-tight tracking-[-0.03em] text-fg">
          {f.received}
        </p>
        <p className="mt-6 max-w-lg leading-relaxed text-fg-muted">{inquiry.disclaimer}</p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={onSubmit} className="space-y-10" noValidate={false}>
      <div className="grid gap-10 sm:grid-cols-2 sm:items-end">
        <div>
          <Label htmlFor="name" required f={f}>
            {f.name}
          </Label>
          <input
            id="name"
            name="name"
            className="field"
            autoComplete="name"
            required
            value={values.name}
            onChange={set("name")}
          />
        </div>
        <div>
          <Label htmlFor="entity" required f={f}>
            {f.entity}
          </Label>
          <input
            id="entity"
            name="entity"
            className="field"
            autoComplete="organization"
            required
            value={values.entity}
            onChange={set("entity")}
          />
        </div>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 sm:items-end">
        <div>
          <Label htmlFor="aum" optional f={f}>
            {f.aum}
          </Label>
          <select id="aum" name="aum" className="field" value={values.aum} onChange={set("aum")}>
            <option value="">{f.aumPlaceholder}</option>
            {inquiry.aumOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="nature" required f={f}>
            {f.nature}
          </Label>
          <select id="nature" name="nature" className="field" required value={values.nature} onChange={set("nature")}>
            <option value="" disabled>
              {f.naturePlaceholder}
            </option>
            {inquiry.natureOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <Label htmlFor="message" required f={f}>
          {f.message}
        </Label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="field resize-none"
          placeholder={f.messagePlaceholder}
          value={values.message}
          onChange={set("message")}
        />
      </div>

      {/* Honeypot: hidden from humans, bots fill it */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={set("website")}
        />
      </div>

      <div className="flex flex-col gap-8 pt-2 sm:flex-row sm:items-start sm:justify-between">
        <p className="max-w-md text-sm leading-relaxed text-fg-subtle">{inquiry.disclaimer}</p>
        <button
          type="submit"
          disabled={submitting}
          className="shrink-0 bg-fg px-10 py-4 text-sm font-medium tracking-[0.12em] text-surface uppercase transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
        >
          {submitting ? f.sending : f.submit}
        </button>
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-fg">
          {f.error}
        </p>
      )}
    </form>
  );
}
