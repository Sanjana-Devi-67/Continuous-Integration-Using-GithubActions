
# 🚀 CI/CD Demo Project

This is a simple Node.js project created to demonstrate **Continuous Integration and Continuous Deployment (CI/CD)** using **GitHub Actions**.

## 📂 Project Structure
├── sum.js # Simple function
├── sum.test.js # Jest test cases
├── package.json # Dependencies & scripts
├── jest.config.js # Jest configuration
└── .github/workflows/ci.yml # CI pipeline


## ⚙️ Features
- Node.js setup with npm
- Unit testing using **Jest**
- Automated CI pipeline with **GitHub Actions**
  - Install dependencies
  - Run tests
  - Ensure code quality before merge

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
npm test
