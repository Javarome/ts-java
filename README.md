# ts-java

TypeScript implementation of the Java platform.

Yes, this is kind of silly, and the whole thing is far from being completed, but it might help if you need to jump quickly into the TypeScript bandwagon:

- but don't have time (or don't want to bother) to learn TypeScript;
- have existing Java code you need to run/migrate on TypeScript (node or browser).

## Implementation

- To avoid name collision with existing JavaScript types, some Java types have been prefixed with a `J` (like `Set` becomes `JSet`). A better scoping approach is being devised.
- AWT/Swing is implemented as DOM equivalents.
- Some blocking operations like `JOptionPane.show(...)` have been implemented as promises
- Some static constants (like `JSplitPane.HORIZONTAL_SPLIT` have been migrated to enums (like `JSplitPaneDirection.HORIZONTAL_SPLIT`).
