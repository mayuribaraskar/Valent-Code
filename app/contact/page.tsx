"use client";

import React, { useMemo, useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  businessEmail: string;
  phone: string;
  organization: string;
  heardFrom: string;
};

export default function ContactApptigaMatch() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    businessEmail: "",
    phone: "",
    organization: "",
    heardFrom: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!form.organization.trim()) e.organization = "Organization is required";

    if (!form.businessEmail.trim()) e.businessEmail = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.businessEmail.trim()))
      e.businessEmail = "Enter a valid email";

    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^[0-9+\-\s()]{7,}$/.test(form.phone.trim()))
      e.phone = "Enter a valid phone";

    if (!form.heardFrom.trim()) e.heardFrom = "Please select an option";
    return e;
  }, [form]);

  const hasErrors = Object.keys(errors).length > 0;

  const setField = (k: keyof FormState, v: string) =>
    setForm((p) => ({ ...p, [k]: v }));

  const markTouched = (k: keyof FormState) =>
    setTouched((p) => ({ ...p, [k]: true }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      firstName: true,
      lastName: true,
      businessEmail: true,
      phone: true,
      organization: true,
      heardFrom: true,
    });

    if (!hasErrors) {
      // ✅ integrate your API call here
      setSubmitted(true);
    }
  };

  // ===== Styles (match 2nd screenshot) =====
  const page: React.CSSProperties = {
    minHeight: "100vh",
    background:
      "radial-gradient(1100px 640px at 50% -10%, rgba(41,238,206,0.12), transparent 65%), radial-gradient(980px 520px at 85% 15%, rgba(96,165,250,0.10), transparent 60%), linear-gradient(180deg, #081b26 0%, #0b2532 55%, #0b2a39 100%)",
    color: "white",
    padding: "76px 18px 0",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
  };

  const wrap: React.CSSProperties = { maxWidth: 1160, margin: "0 auto" };

  const kicker: React.CSSProperties = {
    textAlign: "center",
    fontSize: 11,
    fontWeight: 900,
    letterSpacing: 3.2,
    textTransform: "uppercase",
    color: "rgba(41,238,206,0.95)",
  };

  const h1: React.CSSProperties = {
    textAlign: "center",
    margin: "10px 0 0",
    fontSize: "clamp(34px, 4.2vw, 56px)", // ✅ bigger + readable
    lineHeight: 1.05,
    fontWeight: 900,
    letterSpacing: -0.3,
  };

  const sub: React.CSSProperties = {
    textAlign: "center",
    margin: "14px auto 0",
    maxWidth: 820,
    fontSize: 14.5, // ✅ bigger
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.78)",
  };

  const grid: React.CSSProperties = {
    marginTop: 36,
    display: "grid",
    gridTemplateColumns: "420px 520px", // ✅ locks layout like screenshot
    justifyContent: "center",
    gap: 34,
    alignItems: "start",
  };

  const card: React.CSSProperties = {
    borderRadius: 10,
    border: "1px solid rgba(41,238,206,0.45)",
    background: "rgba(7, 29, 40, 0.55)",
    backdropFilter: "blur(10px)",
    padding: 18,
    boxShadow: "0 18px 50px rgba(0,0,0,0.24)",
    overflow: "hidden", // ✅ important: NOTHING goes outside
  };

  const row2: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    width: "100%",
  };

  const label: React.CSSProperties = {
    fontSize: 12,
    fontWeight: 600,
    fontFamily:"system-ui", 
    letterSpacing: 2.2,
    textTransform: "uppercase",
    color: "rgba(41,238,206,0.95)",
    marginBottom: 6,
  };

  const inputBase: React.CSSProperties = {
    width: "100%",
    height: 36,
    borderRadius: 6,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(4, 17, 24, 0.38)",
    color: "white",
    outline: "none",
    padding: "0 12px",
    fontSize: 13.5, // ✅ clearer
    boxSizing: "border-box",
  };

  const fieldWrap: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    minWidth: 0, // ✅ prevents overflow in grid cells
  };

  const err: React.CSSProperties = {
    fontSize: 11.5,
    color: "rgba(255,160,160,0.95)",
  };

  const sectionTag: React.CSSProperties = {
    fontSize: 10,
    fontWeight: 900,
    letterSpacing: 2.6,
    color: "rgba(41,238,206,0.95)",
    textTransform: "uppercase",
    marginBottom: 10,
  };

  const pill: React.CSSProperties = {
    display: "flex",
    gap: 10,
    alignItems: "center",
    borderRadius: 7,
    padding: "10px 12px",
    border: "1px solid rgba(41,238,206,0.45)",
    background: "rgba(3, 18, 26, 0.35)",
    width: "100%",
    boxSizing: "border-box",
  };

  const iconBox: React.CSSProperties = {
    width: 28,
    height: 28,
    borderRadius: 8,
    display: "grid",
    placeItems: "center",
    background: "rgba(41,238,206,0.10)",
    color: "rgba(41,238,206,0.95)",
    fontWeight: 900,
    fontSize: 13,
    flex: "0 0 auto",
  };

  const pillTitle: React.CSSProperties = { fontSize: 12.5, fontWeight: 600 };
  const pillValue: React.CSSProperties = {
    fontSize: 12.5,
    color: "rgba(255,255,255,0.78)",
  };

  const bottomStrip: React.CSSProperties = {
    marginTop: 56,
    padding: "54px 18px 62px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    textAlign: "center",
    background: "rgba(255,255,255,0.02)",
  };

  const bottomTitle: React.CSSProperties = {
    fontSize: 30,
    fontWeight: 900,
    margin: 0,
  };

  const bottomSub: React.CSSProperties = {
    margin: "10px auto 0",
    maxWidth: 760,
    fontSize: 13.2,
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.75)",
  };

  const primaryBtn: React.CSSProperties = {
    marginTop: 16,
    border: "none",
    cursor: "pointer",
    padding: "10px 16px",
    borderRadius: 6,
    fontWeight: 900,
    color: "white",
    background: "linear-gradient(90deg, #7c3aed, #6d28d9)",
    boxShadow: "0 18px 40px rgba(124, 58, 237, 0.25)",
    fontSize: 12.5,
  };

  const submitBtn = (disabled: boolean): React.CSSProperties => ({
    marginTop: 2,
    height: 38,
    borderRadius: 6,
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    fontWeight: 900,
    color: "white",
    fontSize: 13,
    background: disabled
      ? "rgba(255,255,255,0.14)"
      : "linear-gradient(90deg, #7c3aed, #6d28d9)",
    boxShadow: disabled ? "none" : "0 18px 40px rgba(124, 58, 237, 0.25)",
    width: "100%",
  });

 

  const checkboxBox: React.CSSProperties = {
    width: 16,
    height: 16,
    border: "1px solid rgba(255,255,255,0.35)",
    borderRadius: 3,
    background: "rgba(0,0,0,0.10)",
  };

  return (

    
    <section style={page}>

        {/* ===== TOP HERO SECTION ===== */}


      <div style={wrap}>

            {/* ===== TOP BANNER (inside container like 2nd screenshot) ===== */}
<div
  style={{
    width: "100%",
    maxWidth: 1160,          // same as your wrap
    margin: "0 auto 44px",   // center + space below
    borderRadius: 14,
    overflow: "hidden",      // IMPORTANT: keeps circles inside
    background:
      "radial-gradient(900px 260px at 50% -20%, rgba(41,238,206,0.18), transparent 60%), linear-gradient(180deg, #0f2d3a 0%, #0c2734 100%)",
    height: 180,
    display: "grid",
    placeItems: "center",
    position: "relative",
    boxSizing: "border-box",
  }}
>
  {/* Right-side decorative arcs */}
  <svg
    width="520"
    height="260"
    viewBox="0 0 520 260"
    style={{
      position: "absolute",
      right: -140,
      top: -40,
      opacity: 0.35,
      pointerEvents: "none",
    }}
  >
    <g fill="none" stroke="rgba(96,165,250,0.55)" strokeWidth="1">
      <path d="M520 40 C420 40 360 100 360 180" />
      <path d="M520 10 C400 10 320 90 320 200" />
      <path d="M520 80 C450 80 390 130 390 210" />
      <circle cx="390" cy="210" r="3" fill="rgba(41,238,206,0.9)" stroke="none" />
      <circle cx="360" cy="180" r="3" fill="rgba(41,238,206,0.9)" stroke="none" />
      <circle cx="320" cy="200" r="3" fill="rgba(41,238,206,0.9)" stroke="none" />
    </g>
  </svg>

  <h1
    style={{
      margin: 0,
      color: "#fff",
      fontSize: "clamp(30px, 4vw, 56px)",
      fontWeight: 900,
      letterSpacing: "-0.6px",
    }}
  >
    Contact Us
  </h1>
</div>  


        <div style={kicker}>CONTACT</div>
        <h1 style={h1}>How can we help?</h1>
        <p style={sub}>
          Whether you want to see the product in action, request a demo, or just
          have some questions, we’re only a form fill, email, or call away.
          Reach out and we’ll be in touch ASAP during business hours.
        </p>

        <div style={grid}>
          {/* LEFT FORM */}
          <div style={{ ...card }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "14px 6px" }}>
                <div style={{ fontSize: 18, fontWeight: 900 }}>
                  ✅ Thanks! We received your message.
                </div>
                <div style={{ marginTop: 8, ...pillValue }}>
                  Our team will contact you soon.
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      firstName: "",
                      lastName: "",
                      businessEmail: "",
                      phone: "",
                      organization: "",
                      heardFrom: "",
                    });
                    setTouched({});
                  }}
                  style={{
                    marginTop: 14,
                    border: "none",
                    cursor: "pointer",
                    padding: "12px 14px",
                    borderRadius: 7,
                    fontWeight: 900,
                    color: "#07151f",
                    background: "linear-gradient(90deg, #29eece, #60a5fa)",
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "grid", gap: 12 }}>
                <div style={row2}>
                  <div style={fieldWrap}>
                    <div style={label}>FIRST NAME*</div>
                    <input
                      value={form.firstName}
                      onChange={(e) => setField("firstName", e.target.value)}
                      onBlur={() => markTouched("firstName")}
                      style={inputBase}
                    />
                    {touched.firstName && errors.firstName ? (
                      <div style={err}>{errors.firstName}</div>
                    ) : null}
                  </div>

                  <div style={fieldWrap}>
                    <div style={label}>LAST NAME*</div>
                    <input
                      value={form.lastName}
                      onChange={(e) => setField("lastName", e.target.value)}
                      onBlur={() => markTouched("lastName")}
                      style={inputBase}
                    />
                    {touched.lastName && errors.lastName ? (
                      <div style={err}>{errors.lastName}</div>
                    ) : null}
                  </div>
                </div>

                <div style={row2}>
                  <div style={fieldWrap}>
                    <div style={label}>BUSINESS EMAIL*</div>
                    <input
                      value={form.businessEmail}
                      onChange={(e) => setField("businessEmail", e.target.value)}
                      onBlur={() => markTouched("businessEmail")}
                      style={inputBase}
                    />
                    {touched.businessEmail && errors.businessEmail ? (
                      <div style={err}>{errors.businessEmail}</div>
                    ) : null}
                  </div>

                  <div style={fieldWrap}>
                    <div style={label}>PHONE NUMBER*</div>
                    <input
                      value={form.phone}
                      onChange={(e) => setField("phone", e.target.value)}
                      onBlur={() => markTouched("phone")}
                      style={inputBase}
                    />
                    {touched.phone && errors.phone ? (
                      <div style={err}>{errors.phone}</div>
                    ) : null}
                  </div>
                </div>

                <div style={fieldWrap}>
                  <div style={label}>ORGANIZATION*</div>
                  <input
                    value={form.organization}
                    onChange={(e) => setField("organization", e.target.value)}
                    onBlur={() => markTouched("organization")}
                    style={inputBase}
                  />
                  {touched.organization && errors.organization ? (
                    <div style={err}>{errors.organization}</div>
                  ) : null}
                </div>

                <div style={fieldWrap}>
                  <div style={label}>HOW DID YOU HEAR ABOUT US?*</div>
                  <div style={{ position: "relative" }}>
                    <select
                      value={form.heardFrom}
                      onChange={(e) => setField("heardFrom", e.target.value)}
                      onBlur={() => markTouched("heardFrom")}
                      style={{
                        ...inputBase,
                        paddingRight: 40,
                        appearance: "none",
                      }}
                    >
                      <option value="" style={{ color: "#000" }}>
                        Select one
                      </option>
                      <option value="Search" style={{ color: "#000" }}>
                        Search
                      </option>
                      <option value="LinkedIn" style={{ color: "#000" }}>
                        LinkedIn
                      </option>
                      <option value="Referral" style={{ color: "#000" }}>
                        Referral
                      </option>
                      <option value="Event" style={{ color: "#000" }}>
                        Event / Webinar
                      </option>
                      <option value="Other" style={{ color: "#000" }}>
                        Other
                      </option>
                    </select>

                    <div
                      style={{
                        position: "absolute",
                        right: 12,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "rgba(255,255,255,0.75)",
                        pointerEvents: "none",
                        fontWeight: 900,
                        fontSize: 12,
                      }}
                    >
                      ▼
                    </div>
                  </div>
                  {touched.heardFrom && errors.heardFrom ? (
                    <div style={err}>{errors.heardFrom}</div>
                  ) : null}
                </div>

                

                <button type="submit" disabled={hasErrors} style={submitBtn(hasErrors)}>
                  Submit
                </button>

               
              </form>
            )}
          </div>

          {/* RIGHT INFO */}
          <div style={{ width: "100%", maxWidth: 520 }}>
            <div style={{ display: "grid", gap: 18 }}>
              <div>
                <div style={sectionTag}>HOW YOU CAN REACH US</div>
                <div style={{ display: "grid", gap: 12 }}>
                  <div style={pill}>
                    <div style={iconBox}>✉</div>
                    <div style={{ minWidth: 0 }}>
                      <div style={pillTitle}>Sales Inquiries:</div>
                      <div style={pillValue}>info@grc3.io</div>
                    </div>
                  </div>

                 
                  <div style={pill}>
                    <div style={iconBox}>✉</div>
                    <div style={{ minWidth: 0 }}>
                      <div style={pillTitle}>Product Support:</div>
                      <div style={pillValue}>info@grc3.io</div>
                    </div>
                  </div>

                  <div style={pill}>
                    <div style={iconBox}>☎</div>
                    <div style={{ minWidth: 0 }}>
                      <div style={pillTitle}>Product Support:</div>
                      <div style={pillValue}>+91 90047 35605</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div style={sectionTag}>WHERE YOU CAN FIND US</div>
                <div style={{ ...pill, padding: 14, alignItems: "flex-start" }}>
                  <div style={iconBox}>⌖</div>
                  <div style={{ fontSize: 12.5, lineHeight: 1.7, color: "rgba(255,255,255,0.82)" }}>
                    1106
                    <br />
                    Souls, Hiranandani Estate
                    <br />
                    Thane 400607
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div style={bottomStrip}>
          <h2 style={bottomTitle}>Ready to get started?</h2>
          <p style={bottomSub}>
            Request a demo to see how you can create sticky continuous compliance and
            security workflows.
          </p>
          <button style={primaryBtn}>Request a Demo</button>
        </div>
      </div>

     
    </section>
  );
}
