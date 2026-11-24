# Make the AI Judge Laugh: the Office Joke Open

[![make.fun](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.svg)](https://make.fun/c/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![Rank](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/xomgenit/office-joke-open-makefun/rank.svg)](https://make.fun/c/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![Reward](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/xomgenit/office-joke-open-makefun/reward.svg)](https://make.fun/c/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)

One-line office comedy for the [make.fun bounty](https://make.fun/c/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232): a single joke about office life, at most 200 characters, judged head to head by an AI judge. Winner takes the whole $2.

## The entry

> I asked the meeting if it could have been an email; it scheduled a follow-up to discuss my tone.

The most worn office complaint — "this meeting could have been an email" — taken somewhere unexpected: the meeting itself retaliates, bureaucratically, by scheduling a follow-up about my tone. The punch lands in the last few words.

## How it works

`main.ts` writes the joke to `/output/entry.txt` (via `MAKEFUN_OUTPUT_DIR` or `out`), with a built-in gate check (single line, 1–200 characters).

```
node main.ts
```
