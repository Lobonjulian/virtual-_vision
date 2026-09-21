# Virtual Vision · Plataforma de Visualización Arquitectónica en RA

## Especificación Técnica y Alcance

**Documento:** ESPEC-2026-004
**Versión:** 0.1
**Fecha:** Viernes, 18 de septiembre de 2026
**Equipo:** Frontend Squad — Virtual Vision Inc.
**Roles:** Julian Lobón (Frontend Developer)
**Estado:** Kickoff - setup en curso

## 1. Resumen ejecutivo

Virtual Vision permite a arquitectos y diseñadores mostrar proyectos en 3D con realidad aumentada. El entregable v0.1 es el sitio público: landing corporativa que comunica valor, métricas y servicios.

## 2. Alcance v0.1

### Incluido

- Hero con titular, subtítulo, CTA y imagen.
- Franja de estadísticas
- Tres secciones de valor
- Tres tarjetas de servicios
- CTA final y footer
- Render data-driven desde módulos tipados de TypeScript
- Navegación mediante anclas
- Accesibilidad básica.

### Excluido (v0.2+)

- Visualizador AR funcional.
- Backend.
- Autenticación.
- Internacionalización (i18n).
- Filtrado dinámico.
- Funcionalidades avanzadas de plataforma.

## 3. Requisitos funcionales

| ID    | Requisito                                           | Prioridad |
| ----- | --------------------------------------------------- | --------- |
| RF-01 | Renderizar cada sección desde datos tipados.        | Alta      |
| RF-02 | Compilar sin errores bajo `strict`.                 | Alta      |
| RF-03 | Navegación y CTAs operativos (anclas).              | Media     |
| RF-04 | Accesibilidad básica: semántica, alt, foco visible. | Alta      |

## 4. Requisitos no funcionales

| ID     | Requisito                                                                 |
| ------ | ------------------------------------------------------------------------- |
| RNF-01 | TypeScript estricto, vanilla (sin frameworks).                            |
| RNF-02 | Compilación con `tsc` puro (sin bundler) en v0.1.                         |
| RNF-03 | Capas: `src/types.ts`, `src/data.ts`, `src/app.ts`, `styles/`, `assets/`. |
| RNF-04 | Commits convencionales y DoD por subfase.                                 |

## 5. Changelog

- 0.1 (kickoff): especificación inicial y setup del repo.ales atractivos
