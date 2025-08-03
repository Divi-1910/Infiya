# Infiya

An intelligent news aggregation and personalization platform that delivers curated news content through conversational AI with customizable personalities and preferences.

## 🚀 Features

- **Conversational AI Interface** - Chat with AI news anchors with different personalities
- **Multi-Agent Processing Pipeline** - Intelligent news classification, extraction, and summarization
- **Personalized Content** - Customizable news personalities and topic preferences
- **Real-time Updates** - Live agent status updates during news processing
- **Google OAuth Integration** - Secure authentication with Google accounts
- **Responsive Design** - Modern React frontend with Tailwind CSS
- **Scalable Architecture** - Microservices with FastAPI backend and Go pipeline

Check out a Demo here : https://youtu.be/LQrPyYm8j8Q

## 🏗️ Architecture

High Level Design : <img width="1474" height="816" alt="Image" src="https://github.com/user-attachments/assets/6bfe98d4-08c1-4d23-9b3a-a7614acd18a2" />

Agent Pipeline Architecture : <img width="1195" height="719" alt="Image" src="https://github.com/user-attachments/assets/0e6a1f02-707f-43e6-b4ce-acc94dde79e8" />
Edit : CaptionEnhancer Agent runs in parallel with the scrapper agent. 

### Components

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: FastAPI + MongoDB + Redis
- **Pipeline**: Go microservice with multi-agent workflow
- **Authentication**: Google OAuth 2.0
- **Database**: MongoDB for user data, Redis for caching and real-time updates

## 🛠️ Tech Stack

### Backend

- **FastAPI** - Modern Python web framework
- **MongoDB** - Document database for user data and chat history
- **Redis** - Caching and real-time agent updates
- **Pydantic** - Data validation and serialization
- **Google OAuth** - Authentication

### Frontend

- **React 18** - UI framework
- **Jotai** - State Management
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client

### Pipeline

- **Go** - High-performance processing pipeline
- **Gin** - HTTP web framework
- **ChromaDB** - Vector database for embeddings
- **Ollama** - Local LLM integration
- **News APIs** - External news sources
- **Youtube Data v3 APIs** - External Video Description and Title

## 📋 Prerequisites

- **Node.js** 18+ and npm
- **Python** 3.9+
- **Go** 1.21+
- **MongoDB** 4.4+
- **Redis** 6.0+
- **Docker**
- **Ollama**
- **Docker** 


## 🤖 AI Agents

The pipeline includes multiple specialized agents:

- **Classifier** - Determines query intent and routing
- **Keyword Extractor** - Extracts relevant keywords from queries
- **Query Enhancement** - Enchanes queries for search
- **News API** - Fetches news from external sources
- **Embedding** - Creates vector embeddings for content
- **Relevancy** - Scores content relevance
- **Scraper** - Extracts full article content
- **Vector Storage** - Stores and searches for semantically similar article titles
- **Follow-up** - for Contextual Follow up queries
- **Youtube** - Fetches latest video details
- **Summarizer** - Generates concise summaries
- **Memory** - Maintains conversation context
- **Persona** - Applies personality to responses
- **Chitchat** - Handles casual conversation

## 👤 News Personalities

Choose from different AI anchor personalities:

- **Calm Anchor** - Professional and composed delivery
- **Friendly Explainer** - Approachable and educational
- **Investigative Reporter** - In-depth and analytical
- **Youthful Trendspotter** - Energetic and trend-focused
- **Global Correspondent** - International perspective
- **AI Analyst** - Technical and data-driven

## 📊 API Endpoints

### Authentication

- `POST /api/v1/auth/google` - Google OAuth login
- `POST /api/v1/auth/logout` - User logout

### Chat

- `POST /api/v1/chat/message` - Send chat message
- `GET /api/v1/chat/history` - Get chat history
- `DELETE /api/v1/chat/clear` - Clear chat history

### Users

- `GET /api/v1/users/me` - Get current user
- `PUT /api/v1/users/preferences` - Update preferences

### Pipeline

- `POST /api/v1/workflow/execute` - Process user query
- `GET /api/v1/health` - Health check

## 🐳 Local requirements

```bash
# Build and run all required services 
docker-compose up -d

# Stop services
docker-compose down
```
## Notes : 
1. You must have ollama running locally with a embedding model. I used nomic-embed-text:latest  
2. Look at the Settings.py and Config.go for the env requirements ( I am lazy to write it here for you) 
3. This Project is made so that it strictly remains under Gemini free limits , but it depends on your usage.  

**Built with ❤️ and for ❤️**
