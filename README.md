# AI Mock Interview Application 🎙️🧠  

An intelligent, full-stack AI-powered mock interview platform that simulates real-time technical interviews using modern web technologies and machine learning. This application helps candidates practice for interviews, get personalized feedback, and track their progress—all in a seamless and interactive experience.

---

## 🛠️ Features

- **User Authentication**  
  Candidates can securely **sign up or log in** to access and store their interview data.

- **Candidate Profile Setup**  
  After logging in, users provide:
  - Experience level  
  - Known tech stack (e.g., React, Java, etc.)  
  - Tools used in their development lifecycle  

  These preferences are stored in the database for personalized question generation.

- **AI-Powered Interview Generation**  
  Based on user inputs, interview questions are dynamically generated using AI, tailored to their profile and experience.

- **Video-Based Interview Format**  
  - The candidate undergoes the interview in **video format**.  
  - Questions are delivered via **text-to-speech (TTS)** models.  
  - Candidate responses are analyzed using **speech-to-text** and **natural language processing**.

- **AI-Based Evaluation System**  
  - The system transcribes the spoken answers.  
  - Uses AI to **evaluate** the responses.  
  - Generates **marks/grades** for each question.  
  - Provides **constructive feedback** on how to improve answers.

- **Personal Dashboard**  
  Candidates can access a **personal dashboard** to:
  - View previous interview attempts  
  - Check scores  
  - Read detailed AI-generated feedback  

---

## ⚙️ Technology Stack Used

- **Frontend**:
  - React.js (via Vite for fast development)
  - TypeScript
  - Tailwind CSS for styling
  - Axios for API requests

- **Backend & Services**:
  - Firebase Authentication
  - Firebase Firestore (NoSQL database)
  - Firebase Storage
  - Firebase Hosting (for deployment)

- **AI/ML Integration**:
  - OpenAI GPT (for question generation and feedback)
  - Whisper AI (for speech-to-text transcription)
  - Text-to-Speech via Web Speech API
