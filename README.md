
# LLM Classification Finetuning

> ✨ A frontend layer built with **Next.js** and **Tailwind CSS** for visualizing and interacting with LLM classification finetuning data.

---

## 🧠 Project Overview

This project provides a interface to view and work with CSV datasets used in fine-tuning large language models (LLMs). It connects to Python backend endpoints for serving CSV data and model functionality.

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/llm-classification-finetuning.git
cd llm-classification-finetuning
```

### 2. Start the Backend

Run the model and CSV API servers from the Python backend:

```bash
python src/model/csv-endpoint.py
python src/model/model-endpoint.py
```

Make sure Flask is installed, and CORS is enabled.

### 3. Start the Frontend

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

---

## 📦 Dependencies

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Flask](https://flask.palletsprojects.com/)
- [Pandas](https://pandas.pydata.org/)
- [PapaParse](https://www.papaparse.com/) (for optional frontend CSV parsing)

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---
