"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ElementData, CATEGORY_COLORS, CATEGORY_LABELS } from "@/lib/elements";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

export default function Home() {
  const [selected, setSelected] = useState<ElementData | null>(null);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <Scene selected={selected} onSelect={setSelected} />
      </div>

      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: 22,
          right: 28,
          left: 28,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          zIndex: 20,
          pointerEvents: "none",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #00f5ff, #a855f7, #ff6b6b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Elemental
          </h1>
          <p style={{ fontSize: "0.85rem", opacity: 0.5, marginTop: 4 }}>
            جدول تناوبی سه‌بعدی • کلیک کن روی عناصر
          </p>
        </div>
      </div>

      {/* Info Panel */}
      {selected && (
        <div
          style={{
            position: "absolute",
            top: 100,
            left: 28,
            width: 280,
            background: "rgba(10, 8, 30, 0.82)",
            backdropFilter: "blur(18px)",
            border: `1px solid ${CATEGORY_COLORS[selected.category]}55`,
            borderRadius: 18,
            padding: "20px 22px",
            zIndex: 20,
            boxShadow: `0 0 40px ${CATEGORY_COLORS[selected.category]}22`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: 12,
                background: CATEGORY_COLORS[selected.category],
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.4rem",
                fontWeight: 800,
                color: "#000",
              }}
            >
              {selected.symbol}
            </div>
            <div>
              <div style={{ fontSize: "1.3rem", fontWeight: 700 }}>{selected.nameFa}</div>
              <div style={{ fontSize: "0.85rem", opacity: 0.6 }}>{selected.name}</div>
            </div>
          </div>

          <div style={{ marginTop: 16, fontSize: "0.9rem", lineHeight: 1.7, opacity: 0.85 }}>
            <div>عدد اتمی: <strong>{selected.z}</strong></div>
            <div>جرم اتمی: <strong>{selected.mass}</strong></div>
            <div>دسته: <strong style={{ color: CATEGORY_COLORS[selected.category] }}>{CATEGORY_LABELS[selected.category]}</strong></div>
            <div style={{ marginTop: 6, fontFamily: "monospace", fontSize: "0.82rem", opacity: 0.7 }}>
              {selected.electronConfig}
            </div>
          </div>

          <button
            onClick={() => setSelected(null)}
            style={{
              marginTop: 16,
              width: "100%",
              padding: "8px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.06)",
              color: "white",
              cursor: "pointer",
              fontSize: "0.85rem",
            }}
          >
            بستن
          </button>
        </div>
      )}

      {/* Credit */}
      <div
        style={{
          position: "absolute",
          bottom: 22,
          left: 0,
          right: 0,
          textAlign: "center",
          zIndex: 20,
          fontSize: "0.9rem",
          opacity: 0.7,
        }}
      >
        ساخته شده توسط{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #00f5ff, #ff6b6b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
          }}
        >
          امیرحسین بخشی
        </span>
      </div>
    </div>
  );
}