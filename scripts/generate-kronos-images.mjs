import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

async function generateImages() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080, deviceScaleFactor: 2 });

  // IMAGE 1: Foundation Model / AI Architecture
  const html1 = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Inter:wght@300;400;500;600;700;800&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #06080d;
    color: #e2e8f0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    width: 1920px;
    height: 1080px;
    overflow: hidden;
    position: relative;
  }

  .mono { font-family: 'JetBrains Mono', monospace; }

  /* Background grid and glows */
  .bg-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(to right, rgba(56, 189, 248, 0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(56, 189, 248, 0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%);
  }

  .glow-blue {
    position: absolute;
    width: 700px;
    height: 700px;
    background: radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(59, 130, 246, 0.04) 45%, transparent 70%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  .glow-cyan {
    position: absolute;
    width: 450px;
    height: 450px;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%);
    top: 30%;
    left: 20%;
    pointer-events: none;
  }

  /* Header / Meta HUD */
  .hud-top {
    position: absolute;
    top: 36px;
    left: 48px;
    right: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding-bottom: 20px;
    z-index: 10;
  }

  .project-badge {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .badge-icon {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
    border: 1px solid rgba(56, 189, 248, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 20px rgba(14, 165, 233, 0.35);
  }

  .project-title {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: #f8fafc;
    text-transform: uppercase;
  }

  .project-sub {
    font-size: 13px;
    color: #94a3b8;
    letter-spacing: 0.04em;
  }

  .hud-meta {
    display: flex;
    gap: 28px;
  }

  .meta-item {
    font-size: 12px;
    color: #64748b;
  }

  .meta-item span {
    color: #38bdf8;
    font-weight: 500;
  }

  /* Architecture Canvas Layout */
  .main-stage {
    position: absolute;
    top: 115px;
    bottom: 40px;
    left: 48px;
    right: 48px;
    display: grid;
    grid-template-columns: 340px 1fr 340px;
    gap: 28px;
    align-items: stretch;
    z-index: 5;
  }

  .card-panel {
    background: rgba(13, 17, 23, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 24px;
    backdrop-filter: blur(12px);
    display: flex;
    flex-col: column;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }

  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    padding-bottom: 12px;
    margin-bottom: 16px;
  }

  .panel-title {
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #cbd5e1;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 8px #38bdf8;
  }

  .tag {
    font-size: 10px;
    padding: 3px 8px;
    border-radius: 4px;
    background: rgba(56, 189, 248, 0.1);
    color: #38bdf8;
    border: 1px solid rgba(56, 189, 248, 0.2);
  }

  /* K-Line Input Stream */
  .candlestick-stream {
    display: flex;
    gap: 8px;
    align-items: flex-end;
    height: 180px;
    padding: 16px;
    background: rgba(6, 9, 14, 0.6);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    margin-bottom: 16px;
  }

  .candle {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .wick {
    width: 1.5px;
    background: rgba(148, 163, 184, 0.5);
  }

  .body {
    width: 100%;
    border-radius: 2px;
  }

  .candle.up .wick { background: #38bdf8; }
  .candle.up .body { background: #0284c7; border: 1px solid #38bdf8; }
  .candle.down .wick { background: #64748b; }
  .candle.down .body { background: #1e293b; border: 1px solid #475569; }

  .patch-tokens {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    margin-top: 12px;
  }

  .token-box {
    background: rgba(56, 189, 248, 0.05);
    border: 1px solid rgba(56, 189, 248, 0.2);
    border-radius: 6px;
    padding: 8px;
    text-align: center;
    font-size: 11px;
    color: #93c5fd;
  }

  /* Center Transformer Stage */
  .transformer-center {
    background: rgba(10, 14, 22, 0.8);
    border: 1px solid rgba(56, 189, 248, 0.25);
    border-radius: 16px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    box-shadow: 0 0 50px rgba(14, 165, 233, 0.1);
  }

  .arch-layers-grid {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 10px;
    position: relative;
  }

  .transformer-block {
    background: linear-gradient(90deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 16px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .block-left {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .layer-num {
    font-size: 11px;
    color: #38bdf8;
    font-weight: 700;
    padding: 4px 8px;
    border-radius: 4px;
    background: rgba(56, 189, 248, 0.15);
  }

  .layer-name {
    font-size: 14px;
    font-weight: 600;
    color: #f1f5f9;
  }

  .layer-specs {
    font-size: 12px;
    color: #64748b;
  }

  .attn-matrix-mini {
    display: grid;
    grid-template-columns: repeat(8, 12px);
    gap: 3px;
  }

  .attn-cell {
    width: 12px;
    height: 12px;
    border-radius: 2px;
    background: rgba(56, 189, 248, 0.1);
  }

  .attn-cell.high { background: #38bdf8; box-shadow: 0 0 6px #38bdf8; }
  .attn-cell.med { background: #0284c7; }
  .attn-cell.low { background: #1e3a8a; }

  /* Output / Prediction Visualizer */
  .output-canvas {
    height: 220px;
    background: rgba(6, 9, 14, 0.6);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    padding: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .confidence-cone {
    position: absolute;
    top: 50%;
    right: 30px;
    width: 160px;
    height: 100px;
    transform: translateY(-50%);
    background: linear-gradient(90deg, transparent 0%, rgba(56, 189, 248, 0.15) 100%);
    clip-path: polygon(0% 50%, 100% 0%, 100% 100%);
  }

  .prediction-line {
    position: absolute;
    top: 50%;
    left: 20px;
    right: 20px;
    height: 2px;
    background: linear-gradient(90deg, #38bdf8 0%, #06b6d4 70%, #60a5fa 100%);
    box-shadow: 0 0 12px #38bdf8;
  }

  .distribution-bars {
    display: flex;
    gap: 6px;
    align-items: flex-end;
    height: 80px;
    margin-top: 10px;
  }

  .d-bar {
    flex: 1;
    background: rgba(56, 189, 248, 0.2);
    border-radius: 2px;
  }

  .d-bar.peak {
    background: #38bdf8;
    box-shadow: 0 0 10px rgba(56, 189, 248, 0.6);
  }

  /* Bottom status footer */
  .status-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    padding-top: 14px;
    font-size: 11px;
    color: #64748b;
  }

</style>
</head>
<body>
  <div class="bg-grid"></div>
  <div class="glow-blue"></div>
  <div class="glow-cyan"></div>

  <!-- Top HUD Bar -->
  <div class="hud-top">
    <div class="project-badge">
      <div class="badge-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      </div>
      <div>
        <div class="project-title">KRONOS <span style="font-weight: 300; color: #38bdf8;">FOUNDATION MODEL</span></div>
        <div class="project-sub">Autoregressive K-Line Temporal Transformer Architecture</div>
      </div>
    </div>
    <div class="hud-meta mono">
      <div class="meta-item">ARCHITECTURE: <span>Transformer-XL / RoPE</span></div>
      <div class="meta-item">CONTEXT LENGTH: <span>4,096 TOKENS</span></div>
      <div class="meta-item">D_MODEL: <span>1,024 (16 HEADS)</span></div>
      <div class="meta-item">PARAMETERS: <span>128M DENSE</span></div>
    </div>
  </div>

  <!-- Main Architecture Stage -->
  <div class="main-stage">

    <!-- LEFT: Tokenization & Embedding -->
    <div class="card-panel">
      <div>
        <div class="panel-header">
          <div class="panel-title mono"><div class="dot"></div> K-Line Tokenizer</div>
          <div class="tag mono">OHLCV → EMB</div>
        </div>

        <p style="font-size: 12px; color: #94a3b8; line-height: 1.5; margin-bottom: 14px;">
          Discrete spatial-temporal conversion of multi-scale OHLCV candlestick series into high-dimensional latent vectors.
        </p>

        <!-- Candlestick Visualizer -->
        <div class="candlestick-stream">
          <!-- Sample candles -->
          <div class="candle up" style="height: 100%;">
            <div class="wick" style="height: 25px;"></div>
            <div class="body" style="height: 60px;"></div>
            <div class="wick" style="height: 15px;"></div>
          </div>
          <div class="candle down" style="height: 85%;">
            <div class="wick" style="height: 15px;"></div>
            <div class="body" style="height: 45px;"></div>
            <div class="wick" style="height: 20px;"></div>
          </div>
          <div class="candle up" style="height: 110%;">
            <div class="wick" style="height: 30px;"></div>
            <div class="body" style="height: 75px;"></div>
            <div class="wick" style="height: 10px;"></div>
          </div>
          <div class="candle up" style="height: 130%;">
            <div class="wick" style="height: 20px;"></div>
            <div class="body" style="height: 90px;"></div>
            <div class="wick" style="height: 20px;"></div>
          </div>
          <div class="candle down" style="height: 95%;">
            <div class="wick" style="height: 20px;"></div>
            <div class="body" style="height: 50px;"></div>
            <div class="wick" style="height: 25px;"></div>
          </div>
          <div class="candle up" style="height: 145%;">
            <div class="wick" style="height: 35px;"></div>
            <div class="body" style="height: 100px;"></div>
            <div class="wick" style="height: 15px;"></div>
          </div>
        </div>

        <div style="font-size: 11px; color: #64748b;" class="mono">PATCH PROJECTION & POSITION ENCODING</div>
        <div class="patch-tokens mono">
          <div class="token-box">T[t-3]<br><span style="color: #64748b; font-size: 9px;">d=1024</span></div>
          <div class="token-box">T[t-2]<br><span style="color: #64748b; font-size: 9px;">d=1024</span></div>
          <div class="token-box">T[t-1]<br><span style="color: #64748b; font-size: 9px;">d=1024</span></div>
          <div class="token-box" style="border-color: #38bdf8; background: rgba(56,189,248,0.15); color: #fff;">T[t]<br><span style="color: #38bdf8; font-size: 9px;">ACTIVE</span></div>
        </div>
      </div>

      <div class="status-footer mono">
        <div>NORM: RMSNorm</div>
        <div>ROTARY: θ = 10000</div>
      </div>
    </div>

    <!-- CENTER: Transformer Backbone & Attention Heatmap -->
    <div class="transformer-center">
      <div>
        <div class="panel-header">
          <div class="panel-title mono" style="font-size: 15px; color: #38bdf8;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
              <line x1="6" y1="6" x2="6.01" y2="6"></line>
              <line x1="6" y1="18" x2="6.01" y2="18"></line>
            </svg>
            Transformer Backbone (Stacked Autoregressive Blocks)
          </div>
          <div class="tag mono" style="background: rgba(56,189,248,0.2); border-color: #38bdf8; color: #fff;">
            FLASH-ATTENTION-2
          </div>
        </div>

        <!-- Stacked Blocks -->
        <div class="arch-layers-grid">

          <div class="transformer-block">
            <div class="block-left">
              <div class="layer-num mono">L12</div>
              <div>
                <div class="layer-name">Causal Temporal Self-Attention (Multi-Head)</div>
                <div class="layer-specs mono">Softmax(QK^T / √d_k) · V | Masked Causal Head</div>
              </div>
            </div>
            <div class="attn-matrix-mini">
              <div class="attn-cell high"></div><div class="attn-cell med"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div>
              <div class="attn-cell med"></div><div class="attn-cell high"></div><div class="attn-cell med"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div>
              <div class="attn-cell low"></div><div class="attn-cell med"></div><div class="attn-cell high"></div><div class="attn-cell high"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div>
              <div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell med"></div><div class="attn-cell high"></div><div class="attn-cell high"></div><div class="attn-cell med"></div><div class="attn-cell low"></div><div class="attn-cell low"></div>
            </div>
          </div>

          <div class="transformer-block" style="border-color: rgba(56, 189, 248, 0.4); background: linear-gradient(90deg, rgba(14,165,233,0.15) 0%, rgba(30,41,59,0.7) 100%);">
            <div class="block-left">
              <div class="layer-num mono" style="background: #38bdf8; color: #000;">L06</div>
              <div>
                <div class="layer-name">Cross-Market Latent Attention & SwiGLU FFN</div>
                <div class="layer-specs mono">Global 45-Exchange Interaction Manifold | Hidden Dim: 4,096</div>
              </div>
            </div>
            <div class="attn-matrix-mini">
              <div class="attn-cell high"></div><div class="attn-cell high"></div><div class="attn-cell high"></div><div class="attn-cell med"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div>
              <div class="attn-cell high"></div><div class="attn-cell high"></div><div class="attn-cell high"></div><div class="attn-cell high"></div><div class="attn-cell med"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div>
              <div class="attn-cell med"></div><div class="attn-cell high"></div><div class="attn-cell high"></div><div class="attn-cell high"></div><div class="attn-cell high"></div><div class="attn-cell med"></div><div class="attn-cell low"></div><div class="attn-cell low"></div>
              <div class="attn-cell low"></div><div class="attn-cell med"></div><div class="attn-cell high"></div><div class="attn-cell high"></div><div class="attn-cell high"></div><div class="attn-cell high"></div><div class="attn-cell high"></div><div class="attn-cell med"></div>
            </div>
          </div>

          <div class="transformer-block">
            <div class="block-left">
              <div class="layer-num mono">L01</div>
              <div>
                <div class="layer-name">Input Projection & Dynamic Temporal Positional Encoding</div>
                <div class="layer-specs mono">Learnable Fourier Features + Rotary Embedding</div>
              </div>
            </div>
            <div class="attn-matrix-mini">
              <div class="attn-cell high"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div>
              <div class="attn-cell med"></div><div class="attn-cell high"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div>
              <div class="attn-cell low"></div><div class="attn-cell med"></div><div class="attn-cell high"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div>
              <div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell med"></div><div class="attn-cell high"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div><div class="attn-cell low"></div>
            </div>
          </div>

        </div>
      </div>

      <!-- Attention Heatmap Bar -->
      <div style="background: rgba(6,9,14,0.7); border-radius: 10px; border: 1px solid rgba(255,255,255,0.06); padding: 14px 20px; display: flex; justify-content: space-between; align-items: center;">
        <div class="mono" style="font-size: 11px; color: #94a3b8;">
          TEMPORAL WEIGHT INTENSITY: <span style="color: #38bdf8; font-weight: 600;">HIGH-FREQUENCY ALPHA SIGNALS</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <div class="mono" style="font-size: 10px; color: #64748b;">LOW</div>
          <div style="width: 140px; height: 8px; border-radius: 4px; background: linear-gradient(90deg, #1e3a8a 0%, #0284c7 50%, #38bdf8 100%);"></div>
          <div class="mono" style="font-size: 10px; color: #38bdf8;">HIGH</div>
        </div>
      </div>
    </div>

    <!-- RIGHT: Prediction Head & Multi-Horizon Distribution -->
    <div class="card-panel">
      <div>
        <div class="panel-header">
          <div class="panel-title mono"><div class="dot"></div> Prediction Head</div>
          <div class="tag mono">DISTRIBUTION t+k</div>
        </div>

        <p style="font-size: 12px; color: #94a3b8; line-height: 1.5; margin-bottom: 14px;">
          Non-parametric return density prediction & multi-step autoregressive trajectory forecasting.
        </p>

        <!-- Prediction Graph Visual -->
        <div class="output-canvas">
          <div class="confidence-cone"></div>
          <svg style="position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible;" viewBox="0 0 300 200">
            <!-- Grid lines -->
            <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.05)" stroke-dasharray="3 3"/>
            <line x1="0" y1="100" x2="300" y2="100" stroke="rgba(255,255,255,0.05)" stroke-dasharray="3 3"/>
            <line x1="0" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.05)" stroke-dasharray="3 3"/>

            <!-- Historical input path -->
            <path d="M 10 140 Q 50 160 80 110 T 150 90 T 200 80" fill="none" stroke="#64748b" stroke-width="2"/>

            <!-- Predicted trajectory with glow -->
            <path d="M 200 80 Q 240 70 280 40" fill="none" stroke="#38bdf8" stroke-width="3" filter="drop-shadow(0 0 8px #38bdf8)"/>

            <!-- Target marker -->
            <circle cx="280" cy="40" r="4" fill="#ffffff" stroke="#38bdf8" stroke-width="2"/>
            <circle cx="200" cy="80" r="3" fill="#38bdf8"/>
          </svg>

          <div style="z-index: 2; margin-top: auto;">
            <div class="mono" style="font-size: 10px; color: #64748b; margin-bottom: 4px;">RETURN DENSITY DISTRIBUTION</div>
            <div class="distribution-bars">
              <div class="d-bar" style="height: 15%;"></div>
              <div class="d-bar" style="height: 30%;"></div>
              <div class="d-bar" style="height: 55%;"></div>
              <div class="d-bar peak" style="height: 95%;"></div>
              <div class="d-bar" style="height: 70%;"></div>
              <div class="d-bar" style="height: 40%;"></div>
              <div class="d-bar" style="height: 20%;"></div>
            </div>
          </div>
        </div>

        <div style="margin-top: 14px; display: flex; flex-direction: column; gap: 8px;">
          <div class="mono" style="display: flex; justify-content: space-between; font-size: 11px; background: rgba(255,255,255,0.02); padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.04);">
            <span style="color: #64748b;">EXPECTED ALPHA</span>
            <span style="color: #38bdf8; font-weight: 600;">+2.41 σ</span>
          </div>
          <div class="mono" style="display: flex; justify-content: space-between; font-size: 11px; background: rgba(255,255,255,0.02); padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.04);">
            <span style="color: #64748b;">PREDICTION HORIZON</span>
            <span style="color: #f1f5f9;">T+1 to T+60 K-Lines</span>
          </div>
        </div>
      </div>

      <div class="status-footer mono">
        <div>LOSS: Negative Log-Likelihood</div>
        <div>CALIBRATION: 99.2%</div>
      </div>
    </div>

  </div>
</body>
</html>`;

  // IMAGE 2: Quantitative Trading / Global Market Intelligence
  const html2 = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Inter:wght@300;400;500;600;700;800&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #05070c;
    color: #e2e8f0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    width: 1920px;
    height: 1080px;
    overflow: hidden;
    position: relative;
  }

  .mono { font-family: 'JetBrains Mono', monospace; }

  .bg-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(to right, rgba(56, 189, 248, 0.025) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(56, 189, 248, 0.025) 1px, transparent 1px);
    background-size: 32px 32px;
  }

  .glow-blue {
    position: absolute;
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%);
    top: 40%;
    left: 45%;
    pointer-events: none;
  }

  /* HUD Header */
  .hud-top {
    position: absolute;
    top: 32px;
    left: 48px;
    right: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding-bottom: 18px;
    z-index: 10;
  }

  .hud-title {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .badge-icon {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: linear-gradient(135deg, #0284c7 0%, #1e40af 100%);
    border: 1px solid rgba(56, 189, 248, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 20px rgba(14, 165, 233, 0.3);
  }

  /* Main Stage Grid */
  .main-stage {
    position: absolute;
    top: 110px;
    bottom: 36px;
    left: 48px;
    right: 48px;
    display: grid;
    grid-template-columns: 380px 1fr 400px;
    gap: 24px;
    z-index: 5;
  }

  .card-panel {
    background: rgba(11, 15, 23, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    padding: 22px;
    backdrop-filter: blur(12px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 10px 30px rgba(0,0,0,0.4);
  }

  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    padding-bottom: 12px;
    margin-bottom: 16px;
  }

  .panel-title {
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #cbd5e1;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 8px #38bdf8;
  }

  .tag {
    font-size: 10px;
    padding: 3px 8px;
    border-radius: 4px;
    background: rgba(56, 189, 248, 0.1);
    color: #38bdf8;
    border: 1px solid rgba(56, 189, 248, 0.2);
  }

  /* Market Exchanges List */
  .exchange-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 14px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.04);
    border-radius: 8px;
    margin-bottom: 8px;
  }

  .exchange-name {
    font-size: 12px;
    font-weight: 600;
    color: #f1f5f9;
  }

  .exchange-meta {
    font-size: 11px;
    color: #64748b;
  }

  .exchange-signal {
    font-size: 11px;
    font-weight: 600;
    color: #38bdf8;
  }

  /* Center Chart Arena */
  .center-stage {
    background: rgba(10, 14, 22, 0.85);
    border: 1px solid rgba(56, 189, 248, 0.2);
    border-radius: 14px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    box-shadow: 0 0 40px rgba(14, 165, 233, 0.08);
  }

  .chart-container {
    flex: 1;
    position: relative;
    margin: 16px 0;
    background: rgba(4, 7, 12, 0.6);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .crosshair-hud {
    position: absolute;
    top: 24px;
    left: 24px;
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid rgba(56, 189, 248, 0.3);
    border-radius: 6px;
    padding: 8px 14px;
    font-size: 11px;
    z-index: 5;
    display: flex;
    gap: 16px;
  }

  /* Correlation Heatmap Grid */
  .heatmap-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 4px;
    margin-top: 8px;
  }

  .heat-box {
    height: 28px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 600;
  }

  .heat-1 { background: rgba(56, 189, 248, 0.8); color: #000; }
  .heat-2 { background: rgba(14, 165, 233, 0.5); color: #fff; }
  .heat-3 { background: rgba(2, 132, 199, 0.3); color: #94a3b8; }
  .heat-4 { background: rgba(30, 41, 59, 0.6); color: #64748b; }

</style>
</head>
<body>
  <div class="bg-grid"></div>
  <div class="glow-blue"></div>

  <!-- Top HUD Bar -->
  <div class="hud-top">
    <div class="hud-title">
      <div class="badge-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      </div>
      <div>
        <div style="font-size: 20px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;">
          KRONOS <span style="font-weight: 300; color: #38bdf8;">MARKET INTELLIGENCE</span>
        </div>
        <div style="font-size: 13px; color: #94a3b8; letter-spacing: 0.04em;">
          Multi-Exchange Cross-Market Temporal Feature Extractor
        </div>
      </div>
    </div>
    <div class="mono" style="display: flex; gap: 24px; font-size: 12px; color: #64748b;">
      <div>GLOBAL EXCHANGES: <span style="color: #38bdf8; font-weight: 600;">45 MARKETS</span></div>
      <div>STREAM LATENCY: <span style="color: #38bdf8; font-weight: 600;">1.2 ms</span></div>
      <div>INFERENCE ENGINE: <span style="color: #f1f5f9; font-weight: 500;">Qlib / PyTorch C++</span></div>
    </div>
  </div>

  <!-- Main Grid -->
  <div class="main-stage">

    <!-- LEFT: 45 Global Stock Exchanges Feed -->
    <div class="card-panel">
      <div>
        <div class="panel-header">
          <div class="panel-title mono"><div class="dot"></div> Global Market Feeds</div>
          <div class="tag mono">45 EXCHANGES</div>
        </div>

        <div class="exchange-row mono">
          <div>
            <div class="exchange-name">SSE / SZSE (A-Shares)</div>
            <div class="exchange-meta">CSI 300 / CSI 500 Index</div>
          </div>
          <div class="exchange-signal">ALPHA +1.84</div>
        </div>

        <div class="exchange-row mono">
          <div>
            <div class="exchange-name">HKEX (Hong Kong)</div>
            <div class="exchange-meta">Hang Seng Tech Composite</div>
          </div>
          <div class="exchange-signal">ALPHA +0.92</div>
        </div>

        <div class="exchange-row mono">
          <div>
            <div class="exchange-name">NYSE / NASDAQ (US)</div>
            <div class="exchange-meta">S&P 500 / Nasdaq 100</div>
          </div>
          <div class="exchange-signal">ALPHA +2.10</div>
        </div>

        <div class="exchange-row mono">
          <div>
            <div class="exchange-name">TYO (Tokyo Stock Exchange)</div>
            <div class="exchange-meta">Nikkei 225 / TOPIX</div>
          </div>
          <div class="exchange-signal">ALPHA +0.76</div>
        </div>

        <div class="exchange-row mono">
          <div>
            <div class="exchange-name">LSE (London Stock Exchange)</div>
            <div class="exchange-meta">FTSE 100 Index</div>
          </div>
          <div class="exchange-signal">ALPHA +1.15</div>
        </div>

        <div class="exchange-row mono">
          <div>
            <div class="exchange-name">EUREX / XETRA (Frankfurt)</div>
            <div class="exchange-meta">DAX 40 Blue Chips</div>
          </div>
          <div class="exchange-signal">ALPHA +1.42</div>
        </div>
      </div>

      <div class="mono" style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 12px; font-size: 11px; display: flex; justify-content: space-between; color: #64748b;">
        <div>SYNCHRONIZATION: UTC Ticks</div>
        <div style="color: #38bdf8;">ACTIVE FEED</div>
      </div>
    </div>

    <!-- CENTER: Advanced Multi-Horizon Time Series Chart -->
    <div class="center-stage">
      <div>
        <div class="panel-header">
          <div class="panel-title mono" style="color: #38bdf8;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            Sequential K-Line Trajectory & Transformer Attention Overlay
          </div>
          <div class="tag mono" style="background: rgba(56,189,248,0.2); color: #fff; border-color: #38bdf8;">
            LIVE INFERENCE
          </div>
        </div>
      </div>

      <!-- Candlestick & Waveform Chart -->
      <div class="chart-container">
        <div class="crosshair-hud mono">
          <div>T: <span style="color: #38bdf8;">14:30:00</span></div>
          <div>OPEN: <span style="color: #f1f5f9;">3,420.50</span></div>
          <div>HIGH: <span style="color: #f1f5f9;">3,485.00</span></div>
          <div>PRED DELTA: <span style="color: #38bdf8; font-weight: 700;">+2.35%</span></div>
        </div>

        <svg style="width: 100%; height: 320px; overflow: visible;" viewBox="0 0 800 320">
          <defs>
            <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35"/>
              <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.0"/>
            </linearGradient>
          </defs>

          <!-- Horizontal Grid Lines -->
          <line x1="0" y1="60" x2="800" y2="60" stroke="rgba(255,255,255,0.05)"/>
          <line x1="0" y1="120" x2="800" y2="120" stroke="rgba(255,255,255,0.05)"/>
          <line x1="0" y1="180" x2="800" y2="180" stroke="rgba(255,255,255,0.05)"/>
          <line x1="0" y1="240" x2="800" y2="240" stroke="rgba(255,255,255,0.05)"/>

          <!-- Area fill -->
          <path d="M 40 220 Q 120 240 200 180 T 360 190 T 520 120 T 680 70 L 680 300 L 40 300 Z" fill="url(#chartGrad)"/>

          <!-- Historical Candlestick clusters -->
          <!-- C1 -->
          <line x1="100" y1="180" x2="100" y2="240" stroke="#38bdf8" stroke-width="1.5"/>
          <rect x="94" y="195" width="12" height="30" fill="#0284c7" stroke="#38bdf8" rx="1"/>

          <!-- C2 -->
          <line x1="160" y1="170" x2="160" y2="220" stroke="#64748b" stroke-width="1.5"/>
          <rect x="154" y="180" width="12" height="25" fill="#1e293b" stroke="#475569" rx="1"/>

          <!-- C3 -->
          <line x1="240" y1="140" x2="240" y2="210" stroke="#38bdf8" stroke-width="1.5"/>
          <rect x="234" y="150" width="12" height="40" fill="#0284c7" stroke="#38bdf8" rx="1"/>

          <!-- C4 -->
          <line x1="320" y1="150" x2="320" y2="220" stroke="#38bdf8" stroke-width="1.5"/>
          <rect x="314" y="160" width="12" height="45" fill="#0284c7" stroke="#38bdf8" rx="1"/>

          <!-- C5 -->
          <line x1="420" y1="120" x2="420" y2="190" stroke="#38bdf8" stroke-width="1.5"/>
          <rect x="414" y="130" width="12" height="40" fill="#0284c7" stroke="#38bdf8" rx="1"/>

          <!-- Main continuous price trendline -->
          <path d="M 40 220 Q 120 240 200 180 T 360 190 T 520 120 T 680 70" fill="none" stroke="#38bdf8" stroke-width="2.5" filter="drop-shadow(0 0 10px #38bdf8)"/>

          <!-- Forecast cone -->
          <path d="M 680 70 L 780 20 L 780 130 Z" fill="rgba(56,189,248,0.12)" stroke="rgba(56,189,248,0.3)" stroke-dasharray="4 4"/>
          <path d="M 680 70 Q 730 45 780 35" fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="4 4"/>

          <!-- Highlight signal point -->
          <circle cx="680" cy="70" r="5" fill="#ffffff" stroke="#38bdf8" stroke-width="3"/>
        </svg>

        <div style="display: flex; justify-content: space-between; font-size: 11px; color: #64748b;" class="mono">
          <div>TIMEFRAME: 1-MIN / 5-MIN / 1-DAY ENSEMBLE</div>
          <div>CONFIDENCE INTERVAL: 95.4% (2σ)</div>
        </div>
      </div>

      <div class="mono" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
        <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.04); text-align: center;">
          <div style="font-size: 10px; color: #64748b;">MOMENTUM SCORE</div>
          <div style="font-size: 14px; font-weight: 700; color: #38bdf8;">0.892</div>
        </div>
        <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.04); text-align: center;">
          <div style="font-size: 10px; color: #64748b;">VOLATILITY INDEX</div>
          <div style="font-size: 14px; font-weight: 700; color: #f1f5f9;">14.2%</div>
        </div>
        <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.04); text-align: center;">
          <div style="font-size: 10px; color: #64748b;">ORDER IMBALANCE</div>
          <div style="font-size: 14px; font-weight: 700; color: #38bdf8;">+12.4%</div>
        </div>
        <div style="background: rgba(255,255,255,0.02); padding: 10px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.04); text-align: center;">
          <div style="font-size: 10px; color: #64748b;">LATENT CLUSTER</div>
          <div style="font-size: 14px; font-weight: 700; color: #f1f5f9;">C-08 (EQUITY)</div>
        </div>
      </div>
    </div>

    <!-- RIGHT: Cross-Market Latent Correlation Matrix -->
    <div class="card-panel">
      <div>
        <div class="panel-header">
          <div class="panel-title mono"><div class="dot"></div> Cross-Market Matrix</div>
          <div class="tag mono">LATENT SPACE</div>
        </div>

        <p style="font-size: 12px; color: #94a3b8; line-height: 1.5; margin-bottom: 12px;">
          Dynamic cross-asset attention correlation across global sectors and geographical index clusters.
        </p>

        <div style="font-size: 10px; color: #64748b; margin-bottom: 6px;" class="mono">GLOBAL FACTOR COVARIANCE</div>
        <div class="heatmap-grid mono">
          <div class="heat-box heat-1">1.0</div>
          <div class="heat-box heat-2">0.8</div>
          <div class="heat-box heat-3">0.4</div>
          <div class="heat-box heat-3">0.3</div>
          <div class="heat-box heat-4">0.1</div>
          <div class="heat-box heat-4">0.0</div>

          <div class="heat-box heat-2">0.8</div>
          <div class="heat-box heat-1">1.0</div>
          <div class="heat-box heat-2">0.7</div>
          <div class="heat-box heat-3">0.4</div>
          <div class="heat-box heat-3">0.2</div>
          <div class="heat-box heat-4">0.1</div>

          <div class="heat-box heat-3">0.4</div>
          <div class="heat-box heat-2">0.7</div>
          <div class="heat-box heat-1">1.0</div>
          <div class="heat-box heat-2">0.6</div>
          <div class="heat-box heat-3">0.3</div>
          <div class="heat-box heat-4">0.2</div>

          <div class="heat-box heat-3">0.3</div>
          <div class="heat-box heat-3">0.4</div>
          <div class="heat-box heat-2">0.6</div>
          <div class="heat-box heat-1">1.0</div>
          <div class="heat-box heat-2">0.5</div>
          <div class="heat-box heat-3">0.3</div>

          <div class="heat-box heat-4">0.1</div>
          <div class="heat-box heat-3">0.2</div>
          <div class="heat-box heat-3">0.3</div>
          <div class="heat-box heat-2">0.5</div>
          <div class="heat-box heat-1">1.0</div>
          <div class="heat-box heat-2">0.7</div>

          <div class="heat-box heat-4">0.0</div>
          <div class="heat-box heat-4">0.1</div>
          <div class="heat-box heat-4">0.2</div>
          <div class="heat-box heat-3">0.3</div>
          <div class="heat-box heat-2">0.7</div>
          <div class="heat-box heat-1">1.0</div>
        </div>

        <div style="margin-top: 18px; background: rgba(6,9,14,0.6); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.04);">
          <div class="mono" style="font-size: 11px; color: #38bdf8; font-weight: 600; margin-bottom: 4px;">QLIB BENCHMARK METRICS</div>
          <div class="mono" style="font-size: 11px; color: #cbd5e1; display: flex; justify-content: space-between; margin-bottom: 4px;">
            <span>IC (Information Coeff)</span>
            <span style="color: #38bdf8;">0.084</span>
          </div>
          <div class="mono" style="font-size: 11px; color: #cbd5e1; display: flex; justify-content: space-between;">
            <span>Rank ICIR</span>
            <span style="color: #38bdf8;">1.42</span>
          </div>
        </div>
      </div>

      <div class="mono" style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 12px; font-size: 11px; display: flex; justify-content: space-between; color: #64748b;">
        <div>CLUSTERING: UMAP / t-SNE</div>
        <div>DIM: 128 EMBED</div>
      </div>
    </div>

  </div>
</body>
</html>`;

  // IMAGE 3: Quantitative Backtesting & Model Validation
  const html3 = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Inter:wght@300;400;500;600;700;800&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #06080d;
    color: #e2e8f0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    width: 1920px;
    height: 1080px;
    overflow: hidden;
    position: relative;
  }

  .mono { font-family: 'JetBrains Mono', monospace; }

  .bg-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(to right, rgba(56, 189, 248, 0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(56, 189, 248, 0.03) 1px, transparent 1px);
    background-size: 36px 36px;
  }

  .glow-blue {
    position: absolute;
    width: 750px;
    height: 750px;
    background: radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%);
    top: 35%;
    left: 40%;
    pointer-events: none;
  }

  /* HUD Top Bar */
  .hud-top {
    position: absolute;
    top: 34px;
    left: 48px;
    right: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding-bottom: 18px;
    z-index: 10;
  }

  .hud-title {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .badge-icon {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: linear-gradient(135deg, #0284c7 0%, #2563eb 100%);
    border: 1px solid rgba(56, 189, 248, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 20px rgba(14, 165, 233, 0.35);
  }

  /* Main Grid */
  .main-stage {
    position: absolute;
    top: 112px;
    bottom: 38px;
    left: 48px;
    right: 48px;
    display: grid;
    grid-template-columns: 1fr 420px;
    gap: 28px;
    z-index: 5;
  }

  .panel-box {
    background: rgba(11, 15, 23, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    padding: 26px;
    backdrop-filter: blur(12px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    padding-bottom: 14px;
    margin-bottom: 16px;
  }

  .panel-title {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #cbd5e1;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #38bdf8;
    box-shadow: 0 0 8px #38bdf8;
  }

  .tag {
    font-size: 10px;
    padding: 3px 8px;
    border-radius: 4px;
    background: rgba(56, 189, 248, 0.1);
    color: #38bdf8;
    border: 1px solid rgba(56, 189, 248, 0.2);
  }

  /* KPI Grid */
  .kpi-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 20px;
  }

  .kpi-card {
    background: rgba(6, 9, 14, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 14px 18px;
  }

  .kpi-label {
    font-size: 11px;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 4px;
  }

  .kpi-val {
    font-size: 22px;
    font-weight: 700;
    color: #f8fafc;
  }

  .kpi-sub {
    font-size: 11px;
    color: #38bdf8;
    margin-top: 2px;
  }

  /* Equity Curve SVG container */
  .equity-canvas {
    flex: 1;
    background: rgba(6, 9, 14, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.04);
    border-radius: 12px;
    padding: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* Right pipeline steps */
  .pipeline-step {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 14px 18px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .step-num {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background: rgba(56, 189, 248, 0.15);
    border: 1px solid rgba(56, 189, 248, 0.3);
    color: #38bdf8;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
  }

  .step-title {
    font-size: 13px;
    font-weight: 600;
    color: #f1f5f9;
  }

  .step-desc {
    font-size: 11px;
    color: #64748b;
  }

</style>
</head>
<body>
  <div class="bg-grid"></div>
  <div class="glow-blue"></div>

  <!-- HUD Top Bar -->
  <div class="hud-top">
    <div class="hud-title">
      <div class="badge-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      </div>
      <div>
        <div style="font-size: 20px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;">
          KRONOS <span style="font-weight: 300; color: #38bdf8;">BACKTESTING & VALIDATION</span>
        </div>
        <div style="font-size: 13px; color: #94a3b8; letter-spacing: 0.04em;">
          Historical Order Book Matching Engine & Strategy Risk Verification
        </div>
      </div>
    </div>
    <div class="mono" style="display: flex; gap: 24px; font-size: 12px; color: #64748b;">
      <div>BENCHMARK: <span style="color: #f1f5f9;">CSI 300 / S&P 500</span></div>
      <div>TRANSACTION COST: <span style="color: #38bdf8;">0.05% SLIPPAGE</span></div>
      <div>VALIDATION PERIOD: <span style="color: #38bdf8;">2018 – 2026</span></div>
    </div>
  </div>

  <!-- Main Grid -->
  <div class="main-stage">

    <!-- LEFT: Backtest Equity Curve & Performance Analytics -->
    <div class="panel-box">
      <div>
        <div class="panel-header">
          <div class="panel-title mono"><div class="dot"></div> Cumulative Portfolio Performance & Alpha Curve</div>
          <div class="tag mono" style="background: rgba(56,189,248,0.2); color: #fff; border-color: #38bdf8;">
            OUT-OF-SAMPLE VALIDATION
          </div>
        </div>

        <!-- KPI Cards -->
        <div class="kpi-row mono">
          <div class="kpi-card">
            <div class="kpi-label">Cumulative Return</div>
            <div class="kpi-val" style="color: #38bdf8;">+148.6%</div>
            <div class="kpi-sub">vs Benchmark +24.1%</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label">Annualized Sharpe</div>
            <div class="kpi-val">2.84</div>
            <div class="kpi-sub">Information Ratio: 2.15</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label">Max Drawdown</div>
            <div class="kpi-val">-4.2%</div>
            <div class="kpi-sub">Recovery: 18 Days</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-label">Calmar Ratio</div>
            <div class="kpi-val">4.12</div>
            <div class="kpi-sub">Win Rate: 64.8%</div>
          </div>
        </div>

        <!-- Equity Curve Chart -->
        <div class="equity-canvas">
          <svg style="width: 100%; height: 360px; overflow: visible;" viewBox="0 0 1000 360">
            <defs>
              <linearGradient id="eqGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.3"/>
                <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.0"/>
              </linearGradient>
            </defs>

            <!-- Horizontal Grids -->
            <line x1="40" y1="60" x2="960" y2="60" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4 4"/>
            <line x1="40" y1="130" x2="960" y2="130" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4 4"/>
            <line x1="40" y1="200" x2="960" y2="200" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4 4"/>
            <line x1="40" y1="270" x2="960" y2="270" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4 4"/>

            <!-- Benchmark line (S&P / CSI300) -->
            <path d="M 40 300 Q 200 290 350 270 T 600 240 T 800 220 T 960 210" fill="none" stroke="#475569" stroke-width="2" stroke-dasharray="5 5"/>
            <text x="840" y="200" fill="#64748b" font-size="11" font-family="JetBrains Mono">BENCHMARK (PASSIVE)</text>

            <!-- Strategy Equity Curve Fill -->
            <path d="M 40 310 Q 150 280 250 240 T 450 180 T 650 120 T 820 80 T 960 40 L 960 340 L 40 340 Z" fill="url(#eqGrad)"/>

            <!-- Strategy Line -->
            <path d="M 40 310 Q 150 280 250 240 T 450 180 T 650 120 T 820 80 T 960 40" fill="none" stroke="#38bdf8" stroke-width="3" filter="drop-shadow(0 0 10px #38bdf8)"/>

            <!-- Order Execution Markers (Buy / Sell / Rebalance) -->
            <circle cx="250" cy="240" r="4" fill="#38bdf8"/>
            <text x="250" y="225" fill="#38bdf8" font-size="10" font-family="JetBrains Mono" text-anchor="middle">BUY +L</text>

            <circle cx="450" cy="180" r="4" fill="#38bdf8"/>
            <text x="450" y="165" fill="#38bdf8" font-size="10" font-family="JetBrains Mono" text-anchor="middle">REBALANCE</text>

            <circle cx="650" cy="120" r="4" fill="#38bdf8"/>
            <text x="650" y="105" fill="#38bdf8" font-size="10" font-family="JetBrains Mono" text-anchor="middle">TAKE PROFIT</text>

            <circle cx="960" cy="40" r="6" fill="#ffffff" stroke="#38bdf8" stroke-width="2"/>
          </svg>

          <div style="display: flex; justify-content: space-between; font-size: 11px; color: #64748b;" class="mono">
            <div>START: JAN 2018 (1.00x)</div>
            <div>OUT-OF-SAMPLE SPLIT (2024-2026)</div>
            <div style="color: #38bdf8; font-weight: 600;">FINAL EQUITY: 2.486x</div>
          </div>
        </div>
      </div>

      <div class="mono" style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 14px; font-size: 11px; display: flex; justify-content: space-between; color: #64748b;">
        <div>SIMULATION: High-Frequency Event Loop</div>
        <div>EXECUTION MODEL: VWAP / TWAP Slip Model</div>
      </div>
    </div>

    <!-- RIGHT: End-to-End Simulation Pipeline -->
    <div class="panel-box">
      <div>
        <div class="panel-header">
          <div class="panel-title mono"><div class="dot"></div> Pipeline Execution</div>
          <div class="tag mono">AUTOMATED FLOW</div>
        </div>

        <p style="font-size: 12px; color: #94a3b8; line-height: 1.5; margin-bottom: 16px;">
          Deterministic backtest cycle validating neural alpha predictions against realistic market frictions.
        </p>

        <!-- Pipeline Step 1 -->
        <div class="pipeline-step">
          <div class="step-num mono">01</div>
          <div>
            <div class="step-title">Historical Order Book Ingestion</div>
            <div class="step-desc mono">L2 Tick-by-tick data & K-line reconstruction</div>
          </div>
        </div>

        <!-- Pipeline Step 2 -->
        <div class="pipeline-step" style="border-color: rgba(56,189,248,0.3); background: rgba(56,189,248,0.05);">
          <div class="step-num mono" style="background: #38bdf8; color: #000;">02</div>
          <div>
            <div class="step-title" style="color: #38bdf8;">Kronos Foundation Inference</div>
            <div class="step-desc mono">Batch forward pass producing score distributions</div>
          </div>
        </div>

        <!-- Pipeline Step 3 -->
        <div class="pipeline-step">
          <div class="step-num mono">03</div>
          <div>
            <div class="step-title">Risk & Portfolio Optimization</div>
            <div class="step-desc mono">Mean-variance constraint & factor neutrality guard</div>
          </div>
        </div>

        <!-- Pipeline Step 4 -->
        <div class="pipeline-step">
          <div class="step-num mono">04</div>
          <div>
            <div class="step-title">Matching Engine & Settlement</div>
            <div class="step-desc mono">Simulated fills with slippage, borrow fees & commission</div>
          </div>
        </div>

        <!-- Metric Table -->
        <div style="margin-top: 16px; background: rgba(6,9,14,0.7); border-radius: 10px; border: 1px solid rgba(255,255,255,0.05); padding: 14px;">
          <div class="mono" style="font-size: 11px; color: #38bdf8; font-weight: 600; margin-bottom: 8px;">STRESS TESTING (BLACK SWAN)</div>
          <div class="mono" style="font-size: 11px; color: #94a3b8; display: flex; justify-content: space-between; margin-bottom: 6px;">
            <span>2020 Liquidity Crunch</span>
            <span style="color: #f1f5f9;">Alpha +3.4%</span>
          </div>
          <div class="mono" style="font-size: 11px; color: #94a3b8; display: flex; justify-content: space-between;">
            <span>2022 Tech Volatility Shock</span>
            <span style="color: #f1f5f9;">Max DD -3.1%</span>
          </div>
        </div>
      </div>

      <div class="mono" style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 14px; font-size: 11px; display: flex; justify-content: space-between; color: #64748b;">
        <div>PLATFORM: Microsoft Qlib / C++</div>
        <div style="color: #38bdf8;">TEST PASS (100%)</div>
      </div>
    </div>

  </div>
</body>
</html>`;

  const outputDir = '/Users/supryo/Desktop/portfolio/public/projects';

  console.log('Rendering Image 1 (AI Architecture)...');
  await page.setContent(html1, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(outputDir, 'kronos-1.png'), type: 'png' });

  console.log('Rendering Image 2 (Market Intelligence)...');
  await page.setContent(html2, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(outputDir, 'kronos-2.png'), type: 'png' });

  console.log('Rendering Image 3 (Backtesting Engine)...');
  await page.setContent(html3, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(outputDir, 'kronos-3.png'), type: 'png' });

  await browser.close();
  console.log('Successfully generated all three Kronos portfolio images!');
}

generateImages().catch(err => {
  console.error(err);
  process.exit(1);
});
