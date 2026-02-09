// State management
let state = {
    view: 'player',
    pw: '',
    showPw: false,
    collapsed: {},
    items: [],
    stats: { trust: 0, rupees: 0, hearts: 3, maxHearts: 5, xp: 0, level: 1, ticksToday: 0 },
    tasks: [],
    day: '',
    custom: [],
    props: [],
    projName: '',
    showProj: false
};

// Database of tasks
const db = {
    selfRegulation: [
        { id: 'shower', name: 'Shower', days: [1,3,5], type: '🔴', rupees: 1, xp: 5 },
        { id: 'washFeet', name: 'Wash feet', days: [2,4,6], type: '🔴', rupees: 1, xp: 5 },
        { id: 'washFace', name: 'Wash face', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'brushAM', name: 'Brush AM', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'brushPM', name: 'Brush PM', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'clothes', name: 'Clean clothes', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'hair', name: 'Comb hair', days: 'daily', type: '🌕', rupees: 2, xp: 10 },
        { id: 'emotion', name: 'Emotion check', days: 'daily', type: '🌕', rupees: 2, xp: 10 },
        { id: 'bedtime', name: 'Bed on time', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'water1', name: 'Water waking', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'water8', name: '8 glasses', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'stretch', name: 'Stretch', days: 'daily', type: '🌕', rupees: 2, xp: 10 },
        { id: 'meditate', name: 'Meditation', days: 'daily', type: '🟢', rupees: 3, xp: 15, hearts: 1 },
        { id: 'journal', name: 'Journal', days: 'daily', type: '🟢', rupees: 3, xp: 15, hearts: 1 }
    ],
    taskCompletion: [
        { id: 'dust', name: 'Dust', days: [2,5], type: '🔴', rupees: 1, xp: 5 },
        { id: 'bed', name: 'Make bed', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'tidy', name: 'Tidy', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'sweep', name: 'Sweep', days: [2,5], type: '🔴', rupees: 1, xp: 5 },
        { id: 'dish1', name: 'Dishes 1st', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'dish2', name: 'Dishes 2nd', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'dish3', name: 'Dishes 3rd', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'put1', name: 'Put dishes 1st', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'put2', name: 'Put dishes 2nd', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'put3', name: 'Put dishes 3rd', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'desk', name: 'Desk', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'laundry', name: 'Laundry', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'noRemind', name: 'No reminder', days: 'daily', type: '🌕', rupees: 2, xp: 10 },
        { id: 'onTime', name: 'On time', days: 'daily', type: '🌕', rupees: 2, xp: 10 }
    ],
    systemIntegrity: [
        { id: 'floor', name: 'Floor clear', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'clothes2', name: 'Clothes off floor', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'items', name: 'Items place', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'bathroom', name: 'Bathroom', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'sink', name: 'Sink', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'table', name: 'Table', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'tools', name: 'Tools', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'containers', name: 'Containers', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'restore', name: 'Restore', days: 'daily', type: '🔴', rupees: 1, xp: 5 }
    ],
    errorHandling: [
        { id: 'yell', name: 'No yelling', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'interrupt', name: 'No interrupt', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'calm', name: 'Speak calmly', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'answer', name: 'Answer', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'accept', name: 'Accept', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'walk', name: 'Walk away', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'return', name: 'Return calm', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'complain', name: 'No complain', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'sorry', name: 'Apologize', days: 'daily', type: '🔴', rupees: 1, xp: 5 },
        { id: 'admit', name: 'Admit', days: 'daily', type: '🌕', rupees: 2, xp: 10 },
        { id: 'tryAgain', name: 'Try again', days: 'daily', type: '🌕', rupees: 2, xp: 10 },
        { id: 'selfFix', name: 'Self-correct', days: 'daily', type: '🔴', rupees: 1, xp: 5, hearts: 1 },
        { id: 'help', name: 'Ask help', days: 'daily', type: '🔴', rupees: 1, xp: 5, hearts: 1 },
        { id: 'reflect', name: 'Reflect', days: 'daily', type: '🌕', rupees: 2, xp: 10, hearts: 1 }
    ],
    skillsLearning: []
};

const categoryNames = {
    selfRegulation: '1. Self Regulation',
    taskCompletion: '2. Task Completion',
    systemIntegrity: '3. System Integrity',
    errorHandling: '4. Error Handling',
    skillsLearning: '5. Skills & Learning'
};

// Icon generators
const icons = {
    heart: (size, fill) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${fill}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
    lock: (size, className = '') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="${className}"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    unlock: (size, className = '') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="${className}"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 0 9.9-1"></path></svg>`,
    settings: (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6m9.22-9.22l-4.24 4.24m-6 0L6.78 9.78M23 12h-6m-6 0H1m18.22 6.22l-4.24-4.24m-6 0L4.78 18.22"></path></svg>`,
    checkCircle: (size, className = '') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="${className}"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
    circle: (size, className = '') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="${className}"><circle cx="12" cy="12" r="10"></circle></svg>`,
    star: (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
    zap: (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    shield: (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    chevronDown: (size, className = '') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="${className}"><polyline points="6 9 12 15 18 9"></polyline></svg>`,
    chevronUp: (size, className = '') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="${className}"><polyline points="18 15 12 9 6 15"></polyline></svg>`,
    shoppingBag: (size, className = '') => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="${className}"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`,
    trash: (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`,
    check: (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    x: (size) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
};

// Initialize on load
window.addEventListener('load', () => {
    initApp();
});

function initApp() {
    const today = new Date();
    const d = today.getDay();
    const date = today.toDateString();
    
    const saved = localStorage.getItem('rpgData');
    
    if (saved) {
        try {
            const p = JSON.parse(saved);
            // Always load stats even if it's a new day
            state.stats = p.stats || state.stats;
            state.items = p.items || [];
            state.props = p.props || [];
            
            // If same day, load tasks too
            if (p.day === date) {
                state.tasks = p.tasks || [];
                state.day = date;
                const sc = localStorage.getItem('customTasks');
                if (sc) state.custom = JSON.parse(sc);
                render();
                return;
            }
        } catch(e) {
            console.error('Load error:', e);
        }
    }
    
    // Generate today's tasks
    const todayTasks = [];
    Object.entries(db).forEach(([cat, ct]) => {
        ct.forEach(t => {
            let inc = t.days === 'daily' || (t.days === 'weekly' && d === 0) || (Array.isArray(t.days) && t.days.includes(d));
            if (inc) todayTasks.push({ ...t, category: cat, completed: false, pending: false });
        });
    });
    
    const sc = localStorage.getItem('customTasks');
    if (sc) {
        const cl = JSON.parse(sc);
        state.custom = cl;
        cl.forEach(t => {
            let inc = t.days === 'daily';
            if (typeof t.days === 'string' && t.days.startsWith('weekly_')) inc = d === parseInt(t.days.split('_')[1]);
            else if (Array.isArray(t.days)) inc = t.days.includes(d);
            if (inc) todayTasks.push({ ...t, completed: false, pending: false });
        });
    }
    
    state.tasks = todayTasks;
    state.day = date;
    saveState();
    render();
}

function saveState() {
    if (state.day) {
        localStorage.setItem('rpgData', JSON.stringify({ 
            tasks: state.tasks, 
            stats: state.stats, 
            day: state.day, 
            items: state.items, 
            props: state.props 
        }));
        localStorage.setItem('customTasks', JSON.stringify(state.custom));
    }
}

// Actions
function toggleTask(id) {
    state.tasks = state.tasks.map(t => t.id === id ? { ...t, pending: !t.pending } : t);
    saveState();
    render();
}

function approveTask(id) {
    const t = state.tasks.find(x => x.id === id);
    if (!t || !t.pending) return;
    
    state.tasks = state.tasks.map(x => x.id === id ? { ...x, completed: true, pending: false } : x);
    state.stats.ticksToday++;
    state.stats.rupees += (t.rupees || 0);
    state.stats.xp += (t.xp || 0);
    state.stats.hearts = Math.min(state.stats.maxHearts, state.stats.hearts + (t.hearts || 0));
    
    checkLevelUp();
    saveState();
    render();
}

function checkLevelUp() {
    const needed = state.stats.level * 100;
    if (state.stats.xp >= needed) {
        state.stats.xp -= needed;
        state.stats.level++;
        state.stats.maxHearts++;
        state.stats.hearts = state.stats.maxHearts;
        alert(`Level up! Now Lv ${state.stats.level}`);
    }
}

function rejectTask(id) {
    state.tasks = state.tasks.map(t => t.id === id ? { ...t, pending: false } : t);
    saveState();
    render();
}

function endDay() {
    const ch = state.stats.ticksToday < 18 ? -5 : state.stats.ticksToday >= 25 ? 10 : 5;
    state.stats.trust = Math.max(0, Math.min(100, state.stats.trust + ch));
    state.stats.ticksToday = 0;
    
    alert(`Day ended! Trust ${ch > 0 ? '+' : ''}${ch}`);
    saveState();
    setTimeout(() => window.location.reload(), 2000);
}

function checkPassword() {
    if (state.pw === '0814') {
        state.view = 'parent';
        state.showPw = false;
        state.pw = '';
        render();
    } else {
        alert('Wrong password');
        state.pw = '';
        render();
    }
}

function toggleCategory(cat) {
    state.collapsed[cat] = !state.collapsed[cat];
    render();
}

function buyItem(id) {
    const i = state.items.find(x => x.id === id);
    if (!i || state.stats.rupees < i.cost) return;
    
    state.stats.rupees -= i.cost;
    state.items = state.items.filter(x => x.id !== id);
    saveState();
    render();
}

function proposeProject() {
    if (!state.projName.trim()) return;
    
    state.props.push({
        id: 'p_' + Date.now(),
        name: state.projName,
        status: 'pending',
        at: new Date().toISOString()
    });
    state.projName = '';
    state.showProj = false;
    saveState();
    alert('Submitted!');
    render();
}

function addShopItem() {
    const emoji = document.getElementById('shopEmoji').value || '🎮';
    const name = document.getElementById('shopName').value;
    const cost = parseInt(document.getElementById('shopCost').value);
    
    if (!name || !cost) {
        alert('Fill all fields');
        return;
    }
    
    state.items.push({ id: Date.now()+'', name, emoji, cost });
    document.getElementById('shopEmoji').value = '🎮';
    document.getElementById('shopName').value = '';
    document.getElementById('shopCost').value = '';
    saveState();
    render();
}

function removeShopItem(id) {
    state.items = state.items.filter(x => x.id !== id);
    saveState();
    render();
}

function approveProposal(id) {
    state.props = state.props.map(x => x.id === id ? {...x, status: 'approved'} : x);
    saveState();
    render();
}

function rejectProposal(id) {
    state.props = state.props.map(x => x.id === id ? {...x, status: 'rejected'} : x);
    saveState();
    render();
}

// Render functions
function renderShopView() {
    const open = state.stats.trust >= 20;
    
    return `
        <div class="min-h-screen bg-gradient-player text-white p-4">
            <div class="bg-black-40 rounded-lg p-4">
                <div class="flex justify-between mb-4">
                    <h1 class="text-2xl font-bold">🛒 Shop</h1>
                    <button onclick="state.view='player'; render();" class="px-4 py-2 bg-gray-700 rounded text-sm">Back</button>
                </div>
                <div class="bg-yellow-500-20 rounded p-3 mb-4 flex items-center gap-2">
                    ${icons.star(20)}
                    <span class="text-xl font-bold">${state.stats.rupees} Rupees</span>
                </div>
                ${!open ? `
                    <div class="bg-red-500-20 border-red-500-50 rounded p-6 text-center">
                        <div style="display: flex; justify-content: center; margin-bottom: 1rem;">
                            ${icons.lock(48, 'text-red-400')}
                        </div>
                        <h2 class="text-xl font-bold mb-2">Locked</h2>
                        <p>Need ${20 - state.stats.trust} Trust</p>
                    </div>
                ` : state.items.length === 0 ? `
                    <div class="bg-gray-700-30 rounded p-6 text-center">No items</div>
                ` : `
                    <div class="space-y-3">
                        ${state.items.map(i => {
                            const can = state.stats.rupees >= i.cost;
                            return `
                                <button onclick="buyItem('${i.id}')" ${!can ? 'disabled' : ''}
                                    class="w-full p-4 rounded flex justify-between ${can ? 'bg-purple-600-30 border-purple-500-50 hover-bg-purple-600-50' : 'bg-gray-700-30 opacity-50'}">
                                    <div class="flex gap-3">
                                        <span class="text-3xl">${i.emoji}</span>
                                        <span class="text-lg">${i.name}</span>
                                    </div>
                                    <span class="text-yellow-400 font-bold text-lg">${i.cost} 💰</span>
                                </button>
                            `;
                        }).join('')}
                    </div>
                `}
            </div>
            <div class="h-48"></div>
        </div>
    `;
}

function renderPlayerView() {
    const open = state.stats.trust >= 20;
    const grouped = {};
    
    state.tasks.forEach(t => {
        if (!grouped[t.category]) grouped[t.category] = [];
        grouped[t.category].push(t);
    });
    
    const hearts = Array(state.stats.maxHearts).fill(0).map((_, i) => 
        icons.heart(24, i < state.stats.hearts ? '#ef4444' : 'none')
    ).join('');
    
    return `
        <div class="min-h-screen bg-gradient-player text-white p-4">
            <div class="bg-black-40 rounded-lg p-4 mb-4">
                <div class="flex justify-between mb-4">
                    <h1 class="text-2xl font-bold">Lv${state.stats.level} Player</h1>
                    <div class="flex gap-2">
                        ${open ? `<button onclick="state.view='shop'; render();" class="p-2 hover-bg-white-10 rounded">${icons.shoppingBag(20, 'text-yellow-400')}</button>` : ''}
                        <button onclick="state.showPw=true; render();" class="p-2 hover-bg-white-10 rounded">${icons.settings(20)}</button>
                    </div>
                </div>
                <div class="flex gap-1 mb-3">${hearts}</div>
                <div class="grid grid-cols-2 gap-3 mb-3">
                    <div class="bg-blue-500-20 rounded p-2">
                        <div class="flex gap-2">${icons.shield(16)} <span class="text-sm">Trust</span></div>
                        <div class="text-2xl font-bold">${state.stats.trust}/100</div>
                    </div>
                    <div class="bg-yellow-500-20 rounded p-2">
                        <div class="flex gap-2">${icons.star(16)} <span class="text-sm">Rupees</span></div>
                        <div class="text-2xl font-bold">${state.stats.rupees}</div>
                    </div>
                </div>
                <div class="mb-3 text-sm flex gap-1">${icons.zap(14)} XP: ${state.stats.xp}</div>
                <div class="flex justify-between items-center text-sm">
                    <span>Ticks: ${state.stats.ticksToday}/18</span>
                    ${open ? 
                        `<div class="flex items-center gap-1">${icons.unlock(16, 'text-green-400')}<span class="text-green-400 font-bold">OPEN</span></div>` :
                        `<div class="flex items-center gap-1">${icons.lock(16, 'text-red-400')}<span class="text-red-400 font-bold">LOCKED</span></div>`
                    }
                </div>
            </div>
            
            <div class="space-y-4">
                <div class="bg-gradient-purple-blue rounded-lg p-4 border-purple-500-30">
                    <div class="flex justify-between">
                        <div>
                            <h3 class="font-bold text-purple-300">📚 Propose Project</h3>
                            <p class="text-sm text-gray-400">Learning, creativity, skills</p>
                        </div>
                        <button onclick="state.showProj=!state.showProj; render();" class="bg-purple-600 px-4 py-2 rounded font-bold text-sm">
                            ${state.showProj ? 'Cancel' : 'Propose'}
                        </button>
                    </div>
                    ${state.showProj ? `
                        <div class="mt-4 space-y-3">
                            <input type="text" id="projName" value="${state.projName}" 
                                oninput="state.projName=this.value" 
                                placeholder="What do you want to work on?" 
                                class="w-full bg-gray-800 rounded p-3" />
                            <button onclick="proposeProject()" class="w-full bg-green-600 p-3 rounded font-bold">Submit</button>
                        </div>
                    ` : ''}
                    ${state.props.filter(p => p.status === 'pending').length > 0 ? 
                        `<div class="mt-3 text-sm text-yellow-400">⏳ ${state.props.filter(p => p.status === 'pending').length} waiting</div>` : ''
                    }
                </div>
                
                ${Object.entries(grouped).map(([cat, ct]) => `
                    <div class="bg-black-40 rounded-lg p-4">
                        <button onclick="toggleCategory('${cat}')" class="w-full flex justify-between mb-3">
                            <h2 class="text-lg font-bold text-purple-300">${categoryNames[cat]}</h2>
                            ${state.collapsed[cat] ? icons.chevronDown(20, 'text-purple-300') : icons.chevronUp(20, 'text-purple-300')}
                        </button>
                        ${!state.collapsed[cat] ? `
                            <div class="space-y-2">
                                ${ct.map(t => `
                                    <button onclick="toggleTask('${t.id}')" ${t.completed ? 'disabled' : ''}
                                        class="w-full p-3 rounded flex justify-between ${
                                            t.completed ? 'bg-green-500-20 border-green-500-50' :
                                            t.pending ? 'bg-yellow-500-20 border-yellow-500-50' :
                                            'bg-gray-700-50'
                                        }">
                                        <div class="flex gap-3 flex-1 min-w-0">
                                            ${t.completed ? icons.checkCircle(20, 'text-green-400 flex-shrink-0') :
                                              t.pending ? icons.circle(20, 'text-yellow-400 animate-pulse flex-shrink-0') :
                                              icons.circle(20, 'text-gray-400 flex-shrink-0')
                                            }
                                            <span class="text-sm text-left">${t.type} ${t.name}</span>
                                        </div>
                                        <div class="flex gap-2 text-xs flex-shrink-0 ml-2">
                                            ${t.rupees > 0 ? `<span class="text-yellow-400">+${t.rupees}💰</span>` : ''}
                                            ${t.hearts > 0 ? `<span class="text-red-400">+${t.hearts}❤️</span>` : ''}
                                        </div>
                                    </button>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
            <div class="h-48"></div>
            
            ${state.showPw ? `
                <div class="fixed inset-0 bg-black-80 flex items-center justify-center p-4 z-50">
                    <div class="bg-gray-800 rounded p-6 max-w-sm w-full">
                        <h3 class="text-xl font-bold mb-4">Parent Access</h3>
                        <input type="password" id="pwInput" value="${state.pw}" 
                            oninput="state.pw=this.value" 
                            onkeypress="if(event.key==='Enter') checkPassword()"
                            placeholder="Password" 
                            class="w-full bg-gray-700 rounded p-3 mb-4" />
                        <div class="flex gap-2">
                            <button onclick="checkPassword()" class="flex-1 bg-purple-600 rounded p-3 font-bold">Enter</button>
                            <button onclick="state.showPw=false; state.pw=''; render();" class="flex-1 bg-gray-600 rounded p-3 font-bold">Cancel</button>
                        </div>
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

function renderParentView() {
    const pendingTasks = state.tasks.filter(t => t.pending);
    
    return `
        <div class="min-h-screen bg-gradient-parent text-white p-4">
            <div class="max-w-4xl mx-auto">
                <div class="flex justify-between mb-6">
                    <h1 class="text-2xl font-bold">Parent Panel</h1>
                    <button onclick="state.view='player'; render();" class="bg-gray-700 rounded px-4 py-2">Back</button>
                </div>
                
                <div class="bg-black-40 rounded p-4 mb-6">
                    <h2 class="text-xl font-bold mb-4">Stats</h2>
                    <div class="grid grid-cols-4 gap-4">
                        <div>
                            <div class="text-sm text-gray-400">Trust</div>
                            <div class="text-2xl font-bold text-blue-400">${state.stats.trust}/100</div>
                        </div>
                        <div>
                            <div class="text-sm text-gray-400">Rupees</div>
                            <div class="text-2xl font-bold text-yellow-400">${state.stats.rupees}</div>
                        </div>
                        <div>
                            <div class="text-sm text-gray-400">Hearts</div>
                            <div class="text-2xl font-bold text-red-400">${state.stats.hearts}/${state.stats.maxHearts}</div>
                        </div>
                        <div>
                            <div class="text-sm text-gray-400">Ticks</div>
                            <div class="text-2xl font-bold text-purple-400">${state.stats.ticksToday}/18</div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-black-40 rounded p-4 mb-6">
                    <h2 class="text-xl font-bold mb-4">Pending Tasks</h2>
                    <div class="space-y-2">
                        ${pendingTasks.length === 0 ? 
                            `<p class="text-gray-400 text-sm">No pending tasks</p>` :
                            pendingTasks.map(t => `
                                <div class="bg-yellow-500-20 border-yellow-500-50 rounded p-3 flex justify-between items-center">
                                    <span>${t.type} ${t.name}</span>
                                    <div class="flex gap-2">
                                        <button onclick="approveTask('${t.id}')" class="bg-green-600 p-2 rounded">
                                            ${icons.check(16)}
                                        </button>
                                        <button onclick="rejectTask('${t.id}')" class="bg-red-600 p-2 rounded">
                                            ${icons.x(16)}
                                        </button>
                                    </div>
                                </div>
                            `).join('')
                        }
                    </div>
                </div>
                
                <div class="bg-black-40 rounded p-4 mb-6">
                    <h2 class="text-xl font-bold mb-4">Shop Items</h2>
                    <div class="bg-gray-700-30 rounded p-4 mb-4">
                        <h3 class="font-semibold mb-3">Add Shop Item</h3>
                        <div class="grid grid-cols-4 gap-2 mb-2">
                            <input type="text" id="shopEmoji" placeholder="🎮" maxlength="2" class="bg-gray-800 rounded p-2 text-center text-2xl" />
                            <input type="text" id="shopName" placeholder="Item name" class="col-span-2 bg-gray-800 rounded p-2" />
                            <input type="number" id="shopCost" placeholder="Cost" min="1" class="bg-gray-800 rounded p-2" />
                        </div>
                        <button onclick="addShopItem()" class="w-full bg-green-600 p-2 rounded font-bold">Add Item</button>
                    </div>
                    <div class="space-y-2">
                        <h3 class="font-semibold text-gray-300">Current Items:</h3>
                        ${state.items.length === 0 ? 
                            `<p class="text-gray-400 text-sm">No items</p>` :
                            state.items.map(i => `
                                <div class="bg-gray-700-50 rounded p-3 flex justify-between">
                                    <div class="flex gap-3">
                                        <span class="text-2xl">${i.emoji}</span>
                                        <span>${i.name}</span>
                                    </div>
                                    <div class="flex gap-3 items-center">
                                        <span class="text-yellow-400">${i.cost} 💰</span>
                                        <button onclick="removeShopItem('${i.id}')" class="text-red-400">
                                            ${icons.trash(18)}
                                        </button>
                                    </div>
                                </div>
                            `).join('')
                        }
                    </div>
                </div>
                
                <div class="bg-black-40 rounded p-4 mb-6">
                    <h2 class="text-xl font-bold mb-4">Project Proposals</h2>
                    <div class="space-y-2">
                        ${state.props.length === 0 ? 
                            `<p class="text-gray-400 text-sm">No proposals</p>` :
                            state.props.map(p => `
                                <div class="rounded p-3 flex justify-between items-center ${
                                    p.status === 'pending' ? 'bg-yellow-500-20 border-yellow-500-50' :
                                    p.status === 'approved' ? 'bg-green-500-20 border-green-500-50' :
                                    'bg-red-500-20 border-red-500-50'
                                }">
                                    <div>
                                        <div>${p.name}</div>
                                        <div class="text-xs text-gray-400">${new Date(p.at).toLocaleString()}</div>
                                    </div>
                                    ${p.status === 'pending' ? `
                                        <div class="flex gap-2">
                                            <button onclick="approveProposal('${p.id}')" class="bg-green-600 px-3 py-1 rounded text-sm">Approve</button>
                                            <button onclick="rejectProposal('${p.id}')" class="bg-red-600 px-3 py-1 rounded text-sm">Reject</button>
                                        </div>
                                    ` : `
                                        <span class="text-sm font-bold ${p.status === 'approved' ? 'text-green-400' : 'text-red-400'}">
                                            ${p.status.toUpperCase()}
                                        </span>
                                    `}
                                </div>
                            `).join('')
                        }
                    </div>
                </div>
                
                <div class="bg-black-40 rounded p-4 mb-6">
                    <button onclick="endDay()" class="w-full bg-purple-600 p-4 rounded font-bold text-lg">End Day</button>
                    <p class="text-sm text-gray-400 mt-2 text-center">
                        ${state.stats.ticksToday < 18 ? '⚠️ Trust -5' : state.stats.ticksToday >= 25 ? '⭐ Trust +10' : '✓ Trust +5'}
                    </p>
                </div>
            </div>
        </div>
    `;
}

function render() {
    const app = document.getElementById('app');
    
    if (state.view === 'shop') {
        app.innerHTML = renderShopView();
    } else if (state.view === 'player') {
        app.innerHTML = renderPlayerView();
    } else {
        app.innerHTML = renderParentView();
    }
}