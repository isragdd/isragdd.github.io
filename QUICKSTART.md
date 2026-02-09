# ⚡ QUICK START - 5 Minutes to SQLite

## 📦 What You're Getting

You'll have these files:
```
package.json      → Tells Node what to install
server.js         → Your backend server with SQLite
SETUP.md          → Detailed documentation
.gitignore        → What NOT to commit to git
public/
  ├── index.html  → Your app's HTML
  ├── styles.css  → Your app's CSS
  └── app.js      → Your app's JS (modified for SQLite)
```

## 🎯 Step-by-Step Setup

### 1️⃣ Create Your Project Folder

```bash
mkdir rpg-task-system
cd rpg-task-system
```

### 2️⃣ Create the `public` Folder

```bash
mkdir public
```

### 3️⃣ Put Files in the Right Place

Download all the files I provided, then:

**In the ROOT folder** (rpg-task-system/):
- `package.json`
- `server.js`
- `SETUP.md`
- `.gitignore`

**In the PUBLIC folder** (rpg-task-system/public/):
- `index.html`
- `styles.css`
- `app.js`

Your folder should now look like:
```
rpg-task-system/
├── package.json
├── server.js
├── SETUP.md
├── .gitignore
└── public/
    ├── index.html
    ├── styles.css
    └── app.js
```

### 4️⃣ Install Dependencies

Open terminal in `rpg-task-system` folder:

```bash
npm install
```

Wait for it to finish (downloads Express, SQLite, etc.)

### 5️⃣ Start the Server

```bash
npm start
```

You'll see:
```
╔═══════════════════════════════════════════╗
║   RPG Task System Server                  ║
║   Running on http://localhost:3000        ║
╚═══════════════════════════════════════════╝
```

### 6️⃣ Open Your App

Open browser: **http://localhost:3000**

🎉 **DONE!** Your app now uses SQLite!

---

## 🔍 Where's My Data?

Look for a new file: `rpg_tasks.db`

This is your database! You can:
- Copy it to backup
- Move it to another computer
- Open it with SQLite Browser

---

## 🧪 Quick Test

1. **Complete a task** in the player view
2. **Stop the server** (Ctrl+C)
3. **Start it again** (`npm start`)
4. **Refresh the page** - your progress is saved! ✅

---

## ❌ Troubleshooting

### "npm command not found"
Install Node.js: https://nodejs.org/

### "Port 3000 in use"
Change port in `server.js` line 6:
```javascript
const PORT = 3001; // Change this
```

### "Cannot read property..."
Make sure files are in `public/` folder

### Still broken?
Read `SETUP.md` for detailed help

---

## 🎮 What Changed From Before?

### Old Way (localStorage):
```javascript
localStorage.setItem('rpgData', data)  // Browser only
```

### New Way (SQLite):
```javascript
await saveToDatabase()  // Saved to disk!
```

**Benefits:**
✅ Data persists forever  
✅ Can backup easily  
✅ Multi-device ready  
✅ Unlimited storage  

---

## 📱 Access from Phone/Tablet

1. Find your computer's IP:
   ```bash
   # Windows
   ipconfig
   
   # Mac/Linux
   ifconfig
   ```

2. On phone browser:
   ```
   http://YOUR_IP:3000
   ```
   Example: `http://192.168.1.100:3000`

---

## 💡 Pro Tips

- Keep `rpg_tasks.db` backed up!
- Server must be running to use the app
- Use `Ctrl+C` to stop server
- Check terminal for error messages

---

**Ready to go? Run `npm start` and visit localhost:3000! 🚀**
