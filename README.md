# ts-java
TypeScript implementation of the Java platform.

This could help you if you need to jump quickly to the TypeScript bandwagon:
- but you didn't have time (or don't want to bother) to learn TypeScript;
- have existing Java code you need to run/migrate on TypeScript. 

## Implementation
- To avoid name collision with existing JavaScript types, some Java types have been prefixed with a `J` (like `Set` becomes `JSet`). A better scoping approach is being devised. 
- AWT/Swing is implemented as DOM equivalents.
