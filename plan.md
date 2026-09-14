## Description

A Project / Task Manager 

## Data Structure

The shape of the main array/object, with field names and types.

Projects = [{id, name,}]
Tasks = {id, name, status, project}

Note fields that are v2-only so they don't creep into v1.

## Decisions

Choices made before coding, with the reason. Data flow, derived vs. stored
values, anything you'd otherwise re-argue mid-build.

## MVP v1

Coarse feature list — one line per feature, mark DONE as you go.
Last two are always:
- Create Projects Button
- Inside Projects create Task Button
- Delete Tasks and Projects
- Edit Tasks and Projects
- set Tasks as Done
- Local Storage


## Post MVP v2

- Stats in Projects for example 5/11 tasks done
- create tasks without projects like a inbox list and move them to Projects later
- substasks
- time track tasks
- show time spent in Project Card and in Task Cards

## Design

Layout:
- Region-by-region description

Color Scheme:

Pulled from the reference image: near-black space ground, violet/periwinkle
mid-tones, white-lavender text, pink and cyan as the two glow accents.

/* CSS HEX — base */
--void: #07060F;          /* page background, the deep space black */
--surface: #14112B;       /* cards, panels */
--surface-raised: #1F1A3D; /* hover state, nested task rows */
--border: #322A5C;        /* hairlines between cards */

/* text */
--starlight: #EFEAFB;     /* primary text */
--muted: #9990C2;         /* secondary text, labels, empty states */

/* accents */
--periwinkle: #8B78FF;    /* primary action, active nav, focus ring */
--periwinkle-deep: #5B47D6; /* pressed state */
--nova-pink: #F3A6DC;     /* highlights, XP-ish flourishes, selected project */
--aurora-cyan: #6FE6E4;   /* secondary accent, progress bars */

/* semantic — buttons */
--confirm: #4FD6A0;       /* save / mark done, mint that fits the cool palette */
--confirm-deep: #2FB283;
--danger: #FF5C7A;        /* delete, pulled from the warm pink in the streaks */
--danger-deep: #D63D5B;
--cancel: transparent;    /* cancel = ghost button */
--cancel-text: #9990C2;
--cancel-border: #322A5C;

Rules:
- Only one --periwinkle button per view; everything else is ghost or text.
- --danger never gets a filled background except in a confirm dialog.
- Glow (box-shadow in the accent color) is for state changes only, not decoration.

Fonts:

Headings/UI: Chakra Petch — squared, game-HUD feel without being unreadable.
Body/task text: Inter — neutral so long task titles stay legible.

@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');

## Steps

Numbered, in build order. Each step is one feature from the MVP list broken
into single actions — small enough that one line is one thing you type.
Mark DONE per line, not per step.

0. Setup
    - Delete Basic React stuff DONE
    - Heading + Button DONE
    - Basic CSS Styling DONE

1. Add Project Button
    - create empty array
    - create addProject function
    - addProject changes the array map? it needs an object with id and name
    - create a card with the data


