HYGRE WEBSITE - VERSION 3

This version adds:
- More polished visual design
- Dedicated setup PHOTO carousel
- Dedicated setup VIDEO carousel
- Next/Previous arrow buttons
- Mobile swipe support for galleries
- Contact section with address, phone and email cards
- Responsive desktop/mobile layout
- Hygre logo and the supplied MVP photos

IMPORTANT:
The contact details currently contain placeholders:
Address: Hygre / Guwahati, Assam, India
Phone: +91 00000 00000
Email: hello@hygre.shop

Replace these in index.html with the real Hygre details.

VIDEOS:
Put your MP4 files in:
videos/

The current JavaScript expects:
videos/mvp-overview.mp4
videos/system-demo.mp4

To add more videos, add another filename to the `videos` array in script.js.

PHOTO CAROUSEL:
The current photos are:
images/mvp-exterior.png
images/mvp-interior.png
images/nutriloop.png

You can add more photo slides in index.html by copying a `.photo-slide`.

RUN:
Open the folder in VS Code.
Install Live Server.
Right-click index.html -> Open with Live Server.

DEPLOY:
Upload the project to GitHub and import it into Vercel.
No build command is required.


DESIGN UPDATE:
The hero now uses a split layout and the complete supplied exterior MVP photo is shown with contain sizing, so the structure is not cropped.
The palette uses Hygre's teal/green branding with a warm gold accent.
