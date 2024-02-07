# Component (or vendor) styles — DEPRECIATE

This folder holds component styles that would otherwise be inappropriate to integrate elsewhere into the app.

We should avoid placing styles here as much as possible. There will usually be better places to integrate these styles into the app in a cleaner way, that ties them closer to the component templates that they provide styles for.

For example, `_buttons.scss` will soon be integrated into the button Vue components it is currently styling, and thqt way the styles are sitting right there in the same file as the component. Similarly, we might want to look for ways to integrate `_v-tour.scss` styles into the tour components (but without repetition across several tour components, of course).
