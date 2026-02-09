# 📂 Complete Folder Structure

## Before (What You Had)

```
your-folder/
├── index.html
├── styles.css
└── script.js         (using localStorage)
```

## After (What You Need)

```
rpg-task-system/                    ← Your main project folder
│
├── package.json                    ← Node.js config (install dependencies)
├── server.js                       ← Backend server with SQLite
├── QUICKSTART.md                   ← Quick 5-min setup guide
├── SETUP.md                        ← Detailed documentation
├── .gitignore                      ← Git ignore rules
├── rpg_tasks.db                    ← SQLite database (created automatically)
│
└── public/                         ← Static files served to browser
    ├── index.html                  ← Your HTML file
    ├── styles.css                  ← Your CSS file
    └── app.js                      ← Modified JS (with SQLite support)
```

## 🎯 Exact Steps to Set This Up

### Step 1: Create the folder structure

```bash
# Create main folder
mkdir rpg-task-system
cd rpg-task-system

# Create public subfolder
mkdir public
```

### Step 2: Download and organize files

**Put these in the ROOT folder** (`rpg-task-system/`):
- ✅ package.json
- ✅ server.js
- ✅ QUICKSTART.md
- ✅ SETUP.md
- ✅ .gitignore

**Put these in the PUBLIC folder** (`rpg-task-system/public/`):
- ✅ index.html
- ✅ styles.css
- ✅ app.js (the NEW version with SQLite)

### Step 3: Verify your structure

Run this in terminal to check:
```bash
ls -la
```

You should see:
```
package.json
server.js
QUICKSTART.md
SETUP.md
.gitignore
public/
```

Then check public folder:
```bash
ls -la public/
```

You should see:
```
index.html
styles.css
app.js
```

### Step 4: Install and run

```bash
# Install dependencies
npm install

# Start server
npm start
```

### Step 5: Open browser

Go to: **http://localhost:3000**

---

## 📝 Important Notes

### The `public` Folder
- This is where Express serves static files from
- Browser can access files here
- Must be named exactly `public`

### The Database File
- `rpg_tasks.db` appears after first run
- This is your SQLite database
- **BACKUP THIS FILE** to keep your data safe!

### File Permissions
All files should be readable. If you get permission errors:
```bash
chmod -R 755 .
```

---

## 🔄 What Changed in Each File?

### `app.js` Changes
**Old (localStorage):**
```javascript
localStorage.setItem('rpgData', JSON.stringify(data));
```

**New (SQLite):**
```javascript
await fetch('http://localhost:3000/api/state', {
    method: 'POST',
    body: JSON.stringify(data)
});
```

### `index.html` & `styles.css`
✅ **No changes needed!** These stay exactly the same.

### New Files Added
- `server.js` - Handles database and API
- `package.json` - Lists Node.js dependencies
- `.gitignore` - Prevents committing node_modules

---

## 🚀 Quick Commands Reference

```bash
# Install dependencies
npm install

# Start server
npm start

# Stop server
Ctrl + C

# Check if Node.js is installed
node --version

# Check if npm is installed
npm --version
```

---

## 🐛 Common Mistakes

### ❌ Wrong Structure
```
rpg-task-system/
├── public/
│   ├── package.json     ← WRONG! Should be in root
│   └── server.js        ← WRONG! Should be in root
```

### ✅ Correct Structure
```
rpg-task-system/
├── package.json         ← Correct!
├── server.js            ← Correct!
└── public/
    ├── index.html       ← Correct!
    ├── styles.css       ← Correct!
    └── app.js           ← Correct!
```

---

## 📞 Need Help?

If you're stuck, check:
1. Is Node.js installed? (`node --version`)
2. Are files in the right folders? (check structure above)
3. Did `npm install` finish without errors?
4. Is the server running? (you should see the ASCII art)
5. Check browser console (F12) for errors

---

**Follow this structure exactly and everything will work! 🎯**
