import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ROWS = 15;
const COLS = 15;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Arial', sans-serif;
`;

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(${COLS}, 30px);
grid-template-rows: repeat(${ROWS}, 30px);
gap: 1px;
border: 1px solid #333;
`;

const Cell = styled.div`
width: 30px;
height: 30px;
border: 1px solid #333;
box-sizing: border-box;

&.snake {
    background-color: #2ecc71;
}

&.food {
    background-color: #e74c3c;
}
`;

const SnakeGame = () => {
    const [snake, setSnake] = useState([{ row: 0, col: 0 }]);
    const [food, setFood] = useState(generateFood());
    const [direction, setDirection] = useState('RIGHT');

useEffect(() => {
    const handleKeyPress = (e) => {
    switch (e.key) {
        case 'ArrowUp':
        setDirection('UP');
        break;
        case 'ArrowDown':
        setDirection('DOWN');
        break;
        case 'ArrowLeft':
        setDirection('LEFT');
        break;
        case 'ArrowRight':
        setDirection('RIGHT');
        break;
        default:
        break;
    }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
    document.removeEventListener('keydown', handleKeyPress);
    };
}, []);

useEffect(() => {
    const moveSnake = () => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    switch (direction) {
        case 'UP':
        head.row -= 1;
        break;
        case 'DOWN':
        head.row += 1;
        break;
        case 'LEFT':
        head.col -= 1;
        break;
        case 'RIGHT':
        head.col += 1;
        break;
        default:
        break;
    }

    if (head.row < 0 || head.row >= ROWS || head.col < 0 || head.col >= COLS) {
        // Snake hits the wall, game over
        alert('Game Over!');
        resetGame();
        return;
    }

    newSnake.unshift(head);

    if (head.row === food.row && head.col === food.col) {
        setFood(generateFood());
    } else {
        newSnake.pop();
    }

    setSnake(newSnake);
    };

    const gameInterval = setInterval(() => {
    moveSnake();
    }, 300);

    return () => {
    clearInterval(gameInterval);
    };
}, [snake, food, direction]);

const generateFood = () => {
    let newFood;
    do {
      newFood = { row: Math.floor(Math.random() * ROWS), col: Math.floor(Math.random() * COLS) };
    } while (snake.some((s) => s.row === newFood.row && s.col === newFood.col));
    return newFood;
};

const resetGame = () => {
    setSnake([{ row: 0, col: 0 }]);
    setFood(generateFood());
    setDirection('RIGHT');
};

const renderGrid = () => {
    const grid = [];

    for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
        let cellType = 'empty';

        if (snake.some((s) => s.row === i && s.col === j)) {
        cellType = 'snake';
        } else if (food.row === i && food.col === j) {
        cellType = 'food';
        }

        grid.push(
        <Cell key={`${i}-${j}`} className={cellType} />
        );
    }
    }

    return grid;
};

    return (
    <Container>
        <h1>Snake Game</h1>
        <Grid>{renderGrid()}</Grid>
    </Container>
);
};

export default SnakeGame;
