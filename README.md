# 🎮 RPG Task System with SQLite

A gamified task management system that now uses **SQLite database** instead of localStorage!

## 🎯 What This Is

An RPG-style task tracker where you:
- Complete daily tasks to earn XP, Rupees, and Hearts
- Level up as you complete tasks
- Unlock a shop at 20 Trust points
- Track progress with a parent approval system
- Propose projects for learning and creativity

## ⚡ Quick Start (5 Minutes)

1. **Download all files** from this folder
2. **Create folder structure:**
   ```bash
   rpg-task-system/
   ├── package.json
   ├── server.js
   └── public/
       ├── index.html
       ├── styles.css
       └── app.js
   ```
3. **Install & Run:**
   ```bash
   npm install
   npm start
   ```
4. **Open:** http://localhost:3000

**📖 Read QUICKSTART.md for detailed step-by-step instructions!**

---

## 📦 What's Included

| File | Purpose |
|------|---------|
| **QUICKSTART.md** | 5-minute setup guide - start here! |
| **SETUP.md** | Detailed documentation and troubleshooting |
| **FOLDER_STRUCTURE.md** | Visual guide to organizing files |
| **package.json** | Node.js dependencies |
| **server.js** | Express server with SQLite backend |
| **.gitignore** | Git ignore rules |
| **public/index.html** | Your app's HTML |
| **public/styles.css** | Your app's CSS |
| **public/app.js** | Your app's JavaScript (SQLite-enabled) |

---

## 🆚 Before vs After

### localStorage (Old Way)
- ❌ Lost when browser cache cleared
- ❌ Limited to ~5-10MB
- ❌ Can't access from other devices
- ❌ No backups

### SQLite (New Way)
- ✅ Persistent database file
- ✅ Unlimited storage
- ✅ Easy backups (just copy .db file)
- ✅ Multi-device ready
- ✅ Professional database solution

---

## 🎮 Features

### Player View
- Daily task tracking across 4 categories
- XP and leveling system
- Heart/health system
- Rupee currency
- Trust score (unlocks shop at 20)
- Project proposal system

### Parent Panel (Password: 0814)
- Approve/reject pending tasks
- Manage shop items
- Review project proposals
- End day (resets tasks, adjusts trust)
- View all stats

### Shop System
- Unlocks at 20 Trust
- Buy rewards with Rupees
- Parent can add custom items

---

## 📚 Documentation

- **Getting Started:** Read `QUICKSTART.md` ← **START HERE**
- **Detailed Setup:** Read `SETUP.md`
- **Folder Structure:** Read `FOLDER_STRUCTURE.md`

---

## 💾 Database & Backups

Your data is stored in `rpg_tasks.db`. To backup:
```bash
cp rpg_tasks.db rpg_tasks_backup.db
```

Or visit: `http://localhost:3000/api/backup`

---

## 🛠️ Requirements

- **Node.js** 14+ (https://nodejs.org/)
- **npm** (comes with Node.js)
- Any modern web browser

---

**Ready to start? Open QUICKSTART.md! 🚀**
