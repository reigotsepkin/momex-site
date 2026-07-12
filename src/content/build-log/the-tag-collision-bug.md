---
title: "The bug that made every charge look paid"
excerpt: "How deleting and re-creating a business wallet could make a brand-new charge instantly show as paid — and the two fixes that closed it."
date: 2026-07-11
readMinutes: 5
---

Every charge in Momex gets a destination tag — a small number that lets us match an incoming payment to the exact order it belongs to. Tags start at 1000 and count up for each business.

## What went wrong

If a business wallet was deleted and then restored using the same recovery phrase, it came back at the same XRP Ledger address — which is correct, addresses are derived from the seed. But the local tag counter reset to zero. The next charge created after that got tag 1000 again.

The problem: that address might already have a real, historical payment against tag 1000 from before the deletion. Our payment-matching code found that old payment, saw the tag and amount lined up, and marked the brand-new charge as paid — before the customer had done anything.

## Why it's worse than it sounds

This wasn't a rare edge case. It was guaranteed to happen on the very first charge after any delete-and-restore cycle, every time.

## The fix, two layers

**First**, payment matching now checks that the transaction actually happened after the order was created. A payment from three weeks ago can no longer satisfy an order made five minutes ago, no matter what the tag says.

**Second**, when a business wallet is restored, we now query the ledger directly for the highest tag that address has ever been paid against, and start counting from there instead of from zero. The local counter and the chain's history can't drift apart again.

Neither fix alone would have been enough. The first stops a false match from ever completing. The second stops the collision from happening in the first place. Together, they close it from both directions.
