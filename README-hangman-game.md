# Hangman Game

A simple **Python console game** where players guess a hidden word letter by letter before running out of attempts.  
This project demonstrates the use of **loops, conditional logic, lists, and string manipulation** — perfect for practicing basic Python control structures.

## Table of Contents
- [About](#about)
- [How to Play](#how-to-play)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Credits](#credits)

## About
This Hangman implementation challenges the player to guess a randomly chosen word from a predefined list. Each wrong guess reduces your remaining attempts, represented visually (via ASCII art or simple text).  
When the player guesses the correct word or runs out of attempts, the game ends and displays the result.

### Importance
Hangman is a **classic beginner project** in Python, demonstrating how to:
- Take user input via the console.
- Use conditionals (`if`, `else`) and loops (`for`, `while`).
- Manipulate strings and lists.
- Structure small programs with reusable functions.

## Features
- Random word selection
- Tracks guessed letters and remaining attempts
- Displays progress with each guess
- Simple and fun terminal interface

## Installation

### Prerequisites
- Python 3.8 or later

### Setup
```bash
# 1) Clone or download the repo
git clone <your-repo-url> hangman-game
cd hangman-game

# 2) Run directly using Python
python hangman.py
```

## Usage
Once you run the program, you’ll see underscores representing the hidden word.  
Type one letter at a time and press Enter. You’ll be told whether your guess is correct and how many lives remain.

Example output:
```
Welcome to Hangman!
_ _ _ _ _
Guess a letter: a
Good guess!
_ a _ _ _
Lives remaining: 5
```

## Screenshots
> (Optional) Add screenshots of console gameplay here, e.g.:
```
docs/screenshots/play-round.png
docs/screenshots/game-over.png
```

## Credits
- Author: Julani Victor Chonco ([@JulaniChonco](https://github.com/JulaniChonco))
- Mentors/Reviewers: HyperionDev Bootcamp
