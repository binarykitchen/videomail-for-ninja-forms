---
description: "Use when: creating or editing TypeScript or TSX files"
applyTo: "**/*.ts,**/*.tsx"
---

# TypeScript

## Type safety

- Keep types strict; do not silence errors by weakening types.
- Avoid explicit and implicit `any`. Use `unknown` for untrusted or unspecified data, then narrow or validate it before use.
- Prefer inference for local values and contextually typed callbacks.
- Add parameter types when inference is unavailable or a public boundary benefits from a stable contract.
- Do not annotate callback parameters when the receiving API already provides their types.
- Type API boundaries, including library generics that otherwise default to `any`. Static types do not replace runtime validation of untrusted input.
- Prefer public types exported by direct dependencies over transitive or lower-level types.
- Prefer simple named types and literal unions for known shapes. Avoid deeply nested or generic abstractions without a concrete need.
- Use runtime type guards or validation to narrow values. Type-only utility libraries cannot validate values at runtime.
- Use type assertions only when a value's correctness is established but the compiler cannot express it; do not use assertions to bypass validation or hide an unclear contract.

## Functions

- Let TypeScript infer return types when possible.
- Describe parameters by the fields a function actually consumes; use a small named interface or `Pick` when that makes the contract clearer.

## Validation

- Use the repository's configured type checker after TypeScript changes, especially when shared types or public contracts change.
- Run focused tests when a type narrowing or validation change also affects runtime behavior.
