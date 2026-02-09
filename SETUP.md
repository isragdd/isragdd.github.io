# 🎮 RPG Task System - SQLite Setup Guide

## 📁 Your Folder Structure

After setup, your folder should look like this:

```
your-project-folder/
├── package.json          ← Node.js dependencies
├── server.js             ← Express + SQLite server
├── rpg_tasks.db          ← SQLite database (created automatically)
└── public/
    ├── index.html        ← Your existing HTML
    ├── styles.css        ← Your existing CSS
    └── app.js            ← Modified JavaScript (with SQLite)
```

## 🚀 Setup Instructions

### Step 1: Move Your Files

1. **Create the `public` folder** in your project directory:
   ```bash
   mkdir public
   ```

2. **Move your files** into the public folder:
   - Move `index.html` → `public/index.html`
   - Move `styles.css` → `public/styles.css`
   - Move `app.js` → `public/app.js` (use the NEW app.js I provided)

3. **Add the new files** to your project root:
   - Add `package.json` to root
   - Add `server.js` to root

### Step 2: Install Node.js Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install:
- `express` - Web server
- `better-sqlite3` - SQLite database
- `cors` - Cross-origin resource sharing

### Step 3: Start the Server

```bash
npm start
```

You should see:
```
╔═══════════════════════════════════════════╗
║   RPG Task System Server                  ║
║   Running on http://localhost:3000        ║
║                                           ║
║   API Endpoints:                          ║
║   GET  /api/state   - Get game state      ║
║   POST /api/state   - Save game state     ║
║   GET  /api/stats   - Get stats only      ║
║   GET  /api/backup  - Backup all data     ║
║   GET  /api/health  - Health check        ║
╚═══════════════════════════════════════════╝
```

### Step 4: Open Your App

Open your browser and go to:
```
http://localhost:3000
```

## ✅ What Changed?

### Before (localStorage):
- Data saved only in browser
- Lost if you clear browser data
- Not accessible from other devices
- Limited to 5-10MB

### After (SQLite):
- Data saved in `rpg_tasks.db` file
- Persistent across browser sessions
- Can backup the database file
- No size limitations
- Can access from multiple devices (with network setup)

## 🔧 Common Issues & Solutions

### Issue 1: "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org/

### Issue 2: "Port 3000 already in use"
**Solution:** Either:
1. Stop the other process using port 3000, OR
2. Change the port in `server.js`:
   ```javascript
   const PORT = 3001; // or any other port
   ```
   Then access at `http://localhost:3001`

### Issue 3: "Cannot GET /"
**Solution:** Make sure your files are in the `public` folder

### Issue 4: Database not saving
**Solution:** Check browser console (F12) for errors. Make sure the server is running.

## 💾 Backing Up Your Data

### Option 1: Manual Backup
Just copy the `rpg_tasks.db` file to a safe location

### Option 2: API Backup
Visit in your browser:
```
http://localhost:3000/api/backup
```
This will download all data as JSON

## 🔌 API Usage

You can interact with the database directly:

### Get Game State
```bash
curl http://localhost:3000/api/state
```

### Save Game State
```bash
curl -X POST http://localhost:3000/api/state \
  -H "Content-Type: application/json" \
  -d '{"stats": {"trust": 50, ...}, "tasks": [], ...}'
```

### Check Server Health
```bash
curl http://localhost:3000/api/health
```

## 🌐 Access from Other Devices (Optional)

To access from other devices on your network:

1. Find your computer's IP address:
   - **Windows:** `ipconfig` in Command Prompt
   - **Mac/Linux:** `ifconfig` or `ip addr`

2. On other devices, visit:
   ```
   http://YOUR_IP_ADDRESS:3000
   ```
   Example: `http://192.168.1.100:3000`

## 📊 Database Structure

The SQLite database has one main table:

```sql
game_state
├── id (PRIMARY KEY)
├── user_id (TEXT) - defaults to 'default'
├── stats (TEXT) - JSON string
├── tasks (TEXT) - JSON string
├── items (TEXT) - JSON string
├── props (TEXT) - JSON string
├── custom (TEXT) - JSON string
├── day (TEXT) - current day
├── collapsed (TEXT) - JSON string of collapsed categories
└── updated_at (DATETIME)
```

## 🛑 Stopping the Server

Press `Ctrl + C` in the terminal where the server is running

## 🔄 Migrating from localStorage

Your data will NOT automatically migrate. The first time you run the server, it will create a fresh database. If you want to keep your old data:

1. Export from browser console (F12):
   ```javascript
   console.log(localStorage.getItem('rpgData'));
   console.log(localStorage.getItem('customTasks'));
   ```

2. Copy that data

3. After starting the server, make a POST request to `/api/state` with your data

## 📝 Development Tips

- The database file `rpg_tasks.db` is created automatically on first run
- All data is stored as JSON strings in the database
- The server auto-saves on every action
- Check `server.js` for all available API endpoints
- Use `console.log()` in `app.js` for debugging

## 🎯 Next Steps

Once everything is working, you can:
- [ ] Test all features (tasks, shop, proposals)
- [ ] Backup your database file
- [ ] Customize the password in `app.js` (search for '0814')
- [ ] Add more custom tasks
- [ ] Deploy to a VPS for 24/7 access

## 🆘 Need Help?

Check these files for errors:
1. Browser Console (F12 → Console tab)
2. Server Terminal (where you ran `npm start`)
3. Database file exists (`ls -la` or `dir` to check)

---

**That's it! Your RPG Task System now uses SQLite! 🎉**
