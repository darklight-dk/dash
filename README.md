# 🧬 EXANI-DASH

Simulador de examen EXANI-II para aspirantes a medicina.  
Funciona 100% en el navegador — sin instalación, sin servidor.

## 📁 Estructura del proyecto

```
exani-dash/
├── index.html              ← Aplicación principal
├── exams/
│   └── simulacro-2026.zip  ← Simulacro Premedicina 2026 (50 preguntas)
└── README.md
```

## 🚀 Cómo usarlo localmente

1. Clona o descarga este repositorio
2. Abre la carpeta con **Live Server** (VS Code) o cualquier servidor local
3. Abre `index.html` en tu navegador

> ⚠️ No abras el HTML directo con doble clic — el navegador bloqueará la carga del ZIP por restricciones de seguridad (`fetch` necesita servidor HTTP).

## ➕ Agregar más exámenes

1. Coloca el ZIP dentro de `exams/`
2. Agrega una tarjeta nueva en la sección `BUILTIN_EXAMS` del HTML

## 📦 Estructura del ZIP

```
mi-examen.zip
├── preguntas.json
└── images/
    ├── pregunta1.jpg
    └── pregunta2.jpg
```

### Formato de `preguntas.json`

```json
{
  "meta": {
    "titulo": "Mi Examen",
    "materia": "Área de estudio",
    "total_preguntas": 50,
    "tiempo_minutos": 270,
    "version": "2026-A"
  },
  "questions": [
    {
      "id": 1,
      "question": "Texto de la pregunta",
      "options": ["Opción A", "Opción B", "Opción C"],
      "answer": "B",
      "area": "Fisiología",
      "explanation": "Explicación de la respuesta correcta"
    }
  ]
}
```

---
Hecho con ❤️ para aspirantes a medicina 🧬
