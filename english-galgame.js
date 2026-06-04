// 游戏数据
const gameData = [
    {
        character: 'Emma',
        avatar: '👩‍🦰',
        englishText: "Hello! I'm Emma. What's your name?",
        chineseText: "你好！我是艾玛。你叫什么名字？",
        vocabulary: ['Hello', 'name'],
        choices: [
            { text: "I'm Alex. Nice to meet you!", chinese: "我是亚历克斯。很高兴认识你！", correct: true, explanation: "Perfect! You introduced yourself properly." },
            { text: "My is John.", chinese: "我是约翰。", correct: false, explanation: "Close, but the correct way is 'I'm John' or 'My name is John'." },
            { text: "You are Emma.", chinese: "你是艾玛。", correct: false, explanation: "That's true but doesn't answer the question. You should introduce yourself!" },
            { text: "Emma hello.", chinese: "艾玛你好。", correct: false, explanation: "Good try, but the word order is incorrect. The natural way is 'Hello, I'm...' or 'I'm..., nice to meet you.'" }
        ]
    },
    {
        character: 'Emma',
        avatar: '👩‍🦰',
        englishText: "Where are you from?",
        chineseText: "你来自哪里？",
        vocabulary: ['Where', 'from', 'country'],
        choices: [
            { text: "I'm from China.", chinese: "我来自中国。", correct: true, explanation: "Great! That's the correct way to answer." },
            { text: "From I China am.", chinese: "从我中国是。", correct: false, explanation: "The word order is wrong. Remember: Subject + Verb + Object." },
            { text: "I from China.", chinese: "我来自中国。", correct: false, explanation: "Close! But you need the verb 'am'. It should be 'I am from China' or 'I'm from China'." },
            { text: "China is my.", chinese: "中国是我的。", correct: false, explanation: "Not quite. Try: 'I'm from China' or 'I come from China.'" }
        ]
    },
    {
        character: 'Tom',
        avatar: '👨‍💼',
        englishText: "Do you like English?",
        chineseText: "你喜欢英语吗？",
        vocabulary: ['like', 'English'],
        choices: [
            { text: "Yes, I like English very much!", chinese: "是的，我很喜欢英语！", correct: true, explanation: "Excellent! That's a complete and natural response." },
            { text: "I English like.", chinese: "我英语喜欢。", correct: false, explanation: "The word order is incorrect. In English, it should be Subject + Verb + Object." },
            { text: "English I like.", chinese: "英语我喜欢。", correct: false, explanation: "Close, but the correct word order is 'I like English'." },
            { text: "Like English.", chinese: "喜欢英语。", correct: false, explanation: "You need a subject pronoun. Try: 'I like English' or 'Yes, I do.'" }
        ]
    },
    {
        character: 'Sarah',
        avatar: '👩‍🏫',
        englishText: "What's your favorite food?",
        chineseText: "你最喜欢的食物是什么？",
        vocabulary: ['favorite', 'food'],
        choices: [
            { text: "My favorite food is pizza.", chinese: "我最喜欢的食物是披萨。", correct: true, explanation: "Perfect! You answered with a complete sentence." },
            { text: "Favorite my food is pizza.", chinese: "最喜欢的我食物是披萨。", correct: false, explanation: "The word order is wrong. It should be 'My favorite food is pizza'." },
            { text: "I favorite like pizza.", chinese: "我最喜欢披萨。", correct: false, explanation: "Close! But you should say 'My favorite food is pizza' or 'I like pizza best'." },
            { text: "Pizza favorite.", chinese: "披萨最喜欢。", correct: false, explanation: "You need more words to make a complete sentence. Try: 'My favorite food is pizza'." }
        ]
    },
    {
        character: 'Mike',
        avatar: '🧔‍♂️',
        englishText: "How many languages do you speak?",
        chineseText: "你会说多少种语言？",
        vocabulary: ['languages', 'speak', 'how many'],
        choices: [
            { text: "I speak two languages: Chinese and English.", chinese: "我说两种语言：中文和英文。", correct: true, explanation: "Wonderful! You gave a detailed answer." },
            { text: "Two I speak languages.", chinese: "两个我说语言。", correct: false, explanation: "The word order is incorrect. Try: 'I speak two languages'." },
            { text: "I two languages speak.", chinese: "我两个语言说。", correct: false, explanation: "Close, but the correct order is 'I speak two languages'." },
            { text: "Languages two speak I.", chinese: "语言两个说我。", correct: false, explanation: "That's very confusing! The correct way is 'I speak two languages'." }
        ]
    },
    {
        character: 'Lisa',
        avatar: '👩‍⚕️',
        englishText: "What do you do in your free time?",
        chineseText: "你在空闲时间做什么？",
        vocabulary: ['free time', 'do', 'hobby'],
        choices: [
            { text: "In my free time, I like to read books and watch movies.", chinese: "在我的空闲时间，我喜欢读书和看电影。", correct: true, explanation: "Excellent! A complete and detailed response." },
            { text: "I like reading books watch movies.", chinese: "我喜欢读书看电影。", correct: false, explanation: "Almost! Add 'and' between the activities: 'I like to read books and watch movies'." },
            { text: "Free time I like read.", chinese: "空闲时间我喜欢读。", correct: false, explanation: "Good start! But you need 'to' before the verb and more specific details." },
            { text: "Do free time like I.", chinese: "做空闲时间喜欢我。", correct: false, explanation: "Let's try again! The correct way is 'I like to read/watch in my free time'." }
        ]
    },
    {
        character: 'James',
        avatar: '👨‍🎓',
        englishText: "Have you ever traveled abroad?",
        chineseText: "你曾经出国旅游过吗？",
        vocabulary: ['traveled', 'abroad', 'ever', 'visited'],
        choices: [
            { text: "Yes, I've traveled to Japan and Thailand.", chinese: "是的，我去过日本和泰国。", correct: true, explanation: "Great! You used the present perfect tense correctly." },
            { text: "Yes, I travel to Japan.", chinese: "是的，我旅游去日本。", correct: false, explanation: "Good try! But you should use past tense or present perfect: 'I've traveled to Japan' or 'I traveled to Japan'." },
            { text: "To Japan I traveled have.", chinese: "去日本我旅游过。", correct: false, explanation: "The word order is mixed up. The correct way is 'I've traveled to Japan' or 'I have been to Japan'." },
            { text: "Traveled I Japan.", chinese: "旅游我日本。", correct: false, explanation: "Let's rearrange! Try: 'I've traveled to Japan' or 'I have been to Japan'." }
        ]
    },
    {
        character: 'Amy',
        avatar: '👧',
        englishText: "Can you play a musical instrument?",
        chineseText: "你会演奏乐器吗？",
        vocabulary: ['play', 'instrument', 'music', 'can'],
        choices: [
            { text: "Yes, I can play the piano very well.", chinese: "是的，我会弹钢琴。", correct: true, explanation: "Perfect! You used 'can' correctly to show ability." },
            { text: "Yes, I play piano well.", chinese: "是的，我弹钢琴很好。", correct: false, explanation: "Close! But you should add 'can' before the verb or use 'I play' without 'can'. Try: 'Yes, I can play the piano' or 'Yes, I play piano'." },
            { text: "I can piano play.", chinese: "我会钢琴弹。", correct: false, explanation: "The word order is wrong. It should be 'I can play the piano'." },
            { text: "Can play I piano.", chinese: "会弹我钢琴。", correct: false, explanation: "Let's fix the order! The correct way is 'I can play the piano'." }
        ]
    },
    {
        character: 'David',
        avatar: '👨‍💻',
        englishText: "What's your dream job?",
        chineseText: "你的梦想职业是什么？",
        vocabulary: ['dream', 'job', 'career'],
        choices: [
            { text: "My dream job is to become a software engineer.", chinese: "我的梦想职业是成为一名软件工程师。", correct: true, explanation: "Wonderful! You expressed your dream clearly." },
            { text: "Dream job my is engineer.", chinese: "梦想职业我是工程师。", correct: false, explanation: "The word order needs fixing. Try: 'My dream job is to become a software engineer'." },
            { text: "I want to engineer.", chinese: "我想成为工程师。", correct: false, explanation: "Good meaning! But the question asks about your dream job. Try: 'My dream job is to become a software engineer'." },
            { text: "Engineer dream job.", chinese: "工程师梦想职业。", correct: false, explanation: "You need a complete sentence with a subject and verb. Try: 'My dream job is to become an engineer'." }
        ]
    },
    {
        character: 'Emily',
        avatar: '👩‍🎨',
        englishText: "What would you do if you won the lottery?",
        chineseText: "如果你赢得了彩票，你会做什么？",
        vocabulary: ['lottery', 'would', 'if', 'win'],
        choices: [
            { text: "If I won the lottery, I would travel around the world.", chinese: "如果我赢得彩票，我会环游世界。", correct: true, explanation: "Excellent! You correctly used the conditional 'would'." },
            { text: "I travel world.", chinese: "我旅游世界。", correct: false, explanation: "You need to use the conditional form. Try: 'I would travel around the world'." },
            { text: "If won lottery, travel world.", chinese: "如果赢彩票，旅游世界。", correct: false, explanation: "You need subjects and proper verbs. Try: 'If I won the lottery, I would travel around the world'." },
            { text: "Would I travel if won.", chinese: "我会旅游如果赢。", correct: false, explanation: "Close! But the correct structure is 'If I won the lottery, I would travel'." }
        ]
    }
];

// 游戏状态
let gameState = {
    currentScene: 0,
    correctAnswers: 0,
    totalAnswers: 0,
    learnedWords: new Set(),
    isGameRunning: false,
    selectedChoice: null
};

// 初始化游戏
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('startBtn').addEventListener('click', startGame);
    document.getElementById('resetBtn').addEventListener('click', resetGame);
    document.getElementById('continueBtn').addEventListener('click', nextScene);
});

// 开始游戏
function startGame() {
    gameState.isGameRunning = true;
    gameState.currentScene = 0;
    gameState.correctAnswers = 0;
    gameState.totalAnswers = 0;
    gameState.learnedWords.clear();
    
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('continueBtn').style.display = 'inline-block';
    
    loadScene();
}

// 加载场景
function loadScene() {
    if (gameState.currentScene >= gameData.length) {
        gameOver();
        return;
    }

    const scene = gameData[gameState.currentScene];
    
    // 更新角色
    document.getElementById('characterAvatar').textContent = scene.avatar;
    document.getElementById('characterName').textContent = scene.character;
    
    // 更新对话
    document.getElementById('speaker').textContent = scene.character + ':';
    document.getElementById('content').textContent = scene.englishText;
    document.getElementById('translation').textContent = scene.chineseText;
    
    // 添加单词到学习集合
    scene.vocabulary.forEach(word => gameState.learnedWords.add(word));
    
    // 生成选择题
    generateChoices(scene.choices);
    
    // 隐藏继续按钮
    document.getElementById('continueBtn').style.display = 'none';
    
    // 更新进度
    updateProgress();
}

// 生成选择题
function generateChoices(choices) {
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    
    choices.forEach((choice, index) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerHTML = `<div>${choice.text}</div><div style="font-size: 0.8em; margin-top: 5px; color: rgba(255,255,255,0.7);">${choice.chinese}</div>`;
        btn.addEventListener('click', () => selectChoice(choice, btn));
        choicesContainer.appendChild(btn);
    });
}

// 选择答案
function selectChoice(choice, btn) {
    gameState.totalAnswers++;
    gameState.selectedChoice = choice;
    
    // 禁用所有按钮
    document.querySelectorAll('.choice-btn').forEach(b => b.disabled = true);
    
    // 显示反馈
    if (choice.correct) {
        gameState.correctAnswers++;
        btn.classList.add('correct');
        showFeedback(`✓ Correct! ${choice.explanation}`, true);
    } else {
        btn.classList.add('incorrect');
        showFeedback(`✗ Incorrect! ${choice.explanation}`, false);
    }
    
    // 显示继续按钮
    document.getElementById('continueBtn').style.display = 'inline-block';
    
    // 更新分数
    updateStats();
}

// 显示反馈
function showFeedback(message, isCorrect) {
    const feedbackDiv = document.createElement('div');
    feedbackDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${isCorrect ? '#4caf50' : '#f44336'};
        color: white;
        padding: 20px 40px;
        border-radius: 10px;
        font-size: 1.1em;
        z-index: 100;
        animation: feedbackAppear 0.5s ease-out;
    `;
    feedbackDiv.textContent = message;
    document.body.appendChild(feedbackDiv);
    
    setTimeout(() => feedbackDiv.remove(), 3000);
}

// 下一场景
function nextScene() {
    gameState.currentScene++;
    loadScene();
}

// 游戏结束
function gameOver() {
    document.getElementById('choicesSection').style.display = 'none';
    document.getElementById('continueBtn').style.display = 'none';
    
    const accuracy = Math.round((gameState.correctAnswers / gameState.totalAnswers) * 100);
    const level = Math.floor(accuracy / 20) + 1;
    
    const gameOverMessage = `
        🎉 Game Over! 游戏结束！
        
        Your Score / 你的分数: ${gameState.correctAnswers}/${gameState.totalAnswers}
        Accuracy / 正确率: ${accuracy}%
        Words Learned / 学习的单词: ${gameState.learnedWords.size}
        Level / 等级: ${level}
        
        ${accuracy === 100 ? '🌟 Perfect! You are a star! / 完美！你是明星！' : 
          accuracy >= 80 ? '⭐ Great job! Keep it up! / 做得很好！继续加油！' :
          accuracy >= 60 ? '👍 Good try! Practice more! / 不错的尝试！多加练习！' :
          '💪 Keep practicing! You can do it! / 继续练习！你可以的！'}
    `;
    
    document.getElementById('content').textContent = gameOverMessage;
    document.getElementById('translation').style.display = 'none';
    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('startBtn').textContent = '再玩一次 / Play Again';
}

// 重置游戏
function resetGame() {
    gameState.isGameRunning = false;
    gameState.currentScene = 0;
    gameState.correctAnswers = 0;
    gameState.totalAnswers = 0;
    gameState.learnedWords.clear();
    
    document.getElementById('startBtn').style.display = 'inline-block';
    document.getElementById('startBtn').textContent = '开始游戏 / Start Game';
    document.getElementById('continueBtn').style.display = 'none';
    document.getElementById('choicesSection').style.display = 'block';
    document.getElementById('translation').style.display = 'block';
    
    document.getElementById('content').textContent = 'Hello! Welcome to English Adventure!';
    document.getElementById('translation').textContent = '你好！欢迎来到英语冒险！';
    document.getElementById('choices').innerHTML = '';
    
    updateStats();
    updateProgress();
}

// 更新进度
function updateProgress() {
    const progress = ((gameState.currentScene) / gameData.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = `${gameState.currentScene}/${gameData.length}`;
}

// 更新分数
function updateStats() {
    const accuracy = gameState.totalAnswers > 0 ? 
        Math.round((gameState.correctAnswers / gameState.totalAnswers) * 100) : 0;
    const level = Math.floor(accuracy / 20) + 1;
    
    document.getElementById('accuracy').textContent = accuracy + '%';
    document.getElementById('wordsCount').textContent = gameState.learnedWords.size;
    document.getElementById('level').textContent = level;
}

// 动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes feedbackAppear {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
`;
document.head.appendChild(style);
