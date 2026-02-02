# Adasa

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
"# Adasa" 


---

## 🧩 Folder Responsibilities

### 🔹 `layout/`
Contains **global layout components** used across the application:
- Navigation bar
- Footer
- (Future) sidebars, headers, shells

These components appear once and wrap page content.

---

### 🔹 `pages/`
Represents **route-level components**.
Each page acts as a **container** that:
- Composes multiple sections
- Handles page-specific logic
- Does NOT contain reusable UI elements

Example:
- `home.component` assembles hero, articles, categories, etc.

---

### 🔹 `shared/`
Holds **reusable, presentation-only components**:
- Cards
- Widgets
- Forms
- UI blocks

Rules:
- No routing
- No direct API calls
- Input/Output driven
- Highly reusable across pages

---

### 🔹 `core/`
Contains **application-wide logic**:
- Data models & interfaces
- Services (HTTP, state management, utilities)

Rules:
- Imported once (usually in CoreModule)
- No UI components
- No page-specific logic

---

## 🎯 Architecture Principles

- ✅ Separation of Concerns
- ✅ High Reusability
- ✅ Easy Maintenance & Scaling
- ✅ Clear Ownership of Responsibilities
- ✅ Angular Best Practices

---

## 🚀 Styling Strategy

- **Global styles** → `src/styles/global.css`
- **Component styles** → Scoped per component
- Shared variables, animations, and utilities live globally
- UI-specific styles live with their components

---

## 📌 Summary

This structure is optimized for:
- Medium to large Angular applications
- Team collaboration
- Feature-based growth
- Clean and predictable codebase

---

> Designed with scalability and maintainability in mind 💡

