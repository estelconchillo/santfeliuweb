# Tourism Promotion Web Page project
> - **Author:** Estel Conchillo Castillo
> - **Group:** P-Inf 2 (GEINF)
> - **Project:** Sant Feliu de Guíxols Tourism Website

# Project Structure
The website has been built using React and is divided into different pages that are connected through React Router. 

## PAGES:
> - **Home:** This is the main page. When you open the website, this is the first thing that you see. It has a big hero image of Sant Feliu, some introductory text about the city, an audio file that promotes the location, and a small photo gallery showing different spots around the town.

> - **Information:** This page shows the top 6 things you shouldn’t miss in Sant Feliu de Guíxols. Each activity has a card with an image, a short description, and  a “+INFO” button. When you click this button, it takes you to a new page with more details about that specific place, including a Google Maps location and a link to the official website.

> - **Activities:** Here users can see all the available activities they can book. It works like a shopping cart: you can add activities, see how many you have selected, check the total price, and remove items if you change your mind.

> - **Events:** This page displays upcoming events happening in Sant Feliu, like festivals or cultural activities. Each event has a card with an image, the date, a description, and a button that opens an external link with more information.

> - **Contact:** This page has all the contact information for the tourism office (address, email, phone number), and there’s also a form where users can send questions or requests directly.

# General Layout:
All pages share the same structure:
> - **Header:** Navigation bar at the top with links to all the pages (Home, Information, Activities, Events, Contact).

> - **Main Content:** Changes depending on which page you’re on.

> - **Footer:** Simple footer with copyright info.

# Implemented Features and Multimedia Elements
I’ve added three different types of multimedia to the website:

> - **Audio file:** There’s a promotional audio on the Home page that introduces Sant Feliu de Guíxols. It includes ambient sounds you might hear in the city and a voice over explaining what makes the location special and what kind of tourists would enjoy it. The audio player is styled to fit with the rest of the page and sits in its own highlighted section.

> - **Edited Image:** The main hero image (platja.png) was created and edited in GIMP. I took a photo of the beach and enhanced the colors to make the Mediterranean blue look more vibrant and eye-catching. This image is the first thing visitors see when they land on the website.

> - **Video:** I created a promotional video using Blender. It’s basically an animated ad for the city showing different views and attractions with smooth camera movements.

# Development process
What I used to develop the webpage was:

> - **React.js:** to build the website with reusable components.
> - **React Router:** To handle navigation between different pages.
> - **CSS:** For the styling, animations, and making it responsive.
> - **JSON files:** To store the data about activities and events so I can easily update them.
> - **GIMP:** To edit images.
> - **Blender:** To create the animated video.
> - **Audacity:** To create the promotional audio file.

## HOW I BUILT IT:
> - **Planning:** First, I figured out what pages I needed and what features each one should have.

> - **Creating Components:** I built reusable React components like Header, Footer, InfoCard, ProductCard, EventCard, and Cart so I wouldn’t have to write the same code over and over.

> - **Organizing Data:** I created JSON files with all the information about activities and events. This way, if I need to change something later, I just edit the JSON file instead of going through all the code.
 
> - **Styling:** I picked a color scheme and fonts that reflect the summer vibe, since Sant Feliu de Guíxols is primarily a summer tourist destination. The colors include warm yellows, soft pinks and vibrant purples. Then I wrote  CSS to make everything look attractive and consistent. I added animations and hover effects to make it more dynamic.

> - **Adding Multimedia:** I embedded the audio player, the edited images and the video in the right places.

> - **Responsive design:** I made all the pages responsive so they look good and work properly on desktops, tablets and mobile phones.

> - **Optimization:** I made sure images and multimedia files weren’t too big so the website loads quickly.

# Run the website
### WHAT YOU NEED:
**Node.js** (version 14 or newer) installed on your computer.

npm (comes automatically with Node.js).

## HOW TO RUN IT:
### Get the Project Files:
If you have Git: git clone [repository-url]

Or just download the ZIP file and extract it.

### Open Terminal/Command Prompt and Go to the Project Folder:
cd santfeliuweb

### Install Everything the Project Needs:
npm install

### Start the Website:
npm start

npm start

