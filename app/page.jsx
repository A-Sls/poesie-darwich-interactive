"use client";
import React, { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  
  return (
    <div dir="rtl" style={{ 
      background: '#0f0f1e', 
      minHeight: '100vh', 
      color: 'white',
      padding: '50px 20px',
      fontFamily: 'Cairo, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '30px' }}>
        🎭 مَحْمُودْ دَرْوِيشْ
      </h1>
      <h2 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '50px' }}>
        على هذه الأرض ما يستحق الحياة
      </h2>
      <div style={{ textAlign: 'center' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            background: '#3498db',
            color: 'white',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '10px',
            fontSize: '1.2rem',
            cursor: 'pointer'
          }}
        >
          Compteur : {count}
        </button>
      </div>
      <p style={{ textAlign: 'center', marginTop: '30px', opacity: 0.8 }}>
        ✅ Ça marche ! Maintenant on peut ajouter ton code poétique !
      </p>
    </div>
  );
}
