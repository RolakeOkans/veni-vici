# Web Development Project 4 - Veni Vici!

Submitted by: **Rolake**

This web app: **A cat discovery app that fetches random cat breeds from TheCatAPI. Users can discover new cats, click on attributes to ban them from future results, and view a history of previously seen cats.**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Application features a 'Discover' button that creates a new API fetch request on click**
  - [x] A single result of an API call is displayed at a time
  - [x] Only one item is viewable at a time and at least one image is displayed per API call
  - [x] API call response results appear random to the user
  - [x] At least three attributes are displayed per API call
  - [x] Displayed attributes match the displayed image
- [x] **Clicking on a displayed value for one attribute adds it to a ban list**
  - [x] Clicking on a clickable attribute not on the ban list adds it to the ban list
  - [x] Clicking on an attribute in the ban list removes it from the ban list
  - [x] Attributes on the ban list prevent further results with that attribute from being displayed

The following **optional** features are implemented:

- [x] Multiple types of attributes are clickable and can be added to the ban list
- [x] Users can see a stored history of their previously viewed items from this session
  - [x] A dedicated section displays all previously seen images and attributes
  - [x] Each time the API call button is clicked, the history updates with the newest result

The following **additional** features are implemented:

* No additional features implemented at this time

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://raw.githubusercontent.com/RolakeOkans/veni-vici/main/Kapture%202026-06-30%20at%2018.57.49.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with Kap

## Notes

The main challenge was handling API keys securely using environment variables in Vite. Also learned that template literals with backticks are required when embedding variables in strings — single quotes won't work. Rate limiting from the API also required adding delays between fetch attempts.

## License

    Copyright 2026 Rolake

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
