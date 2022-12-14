---
sidebar_position: 3
---
# Working with Flags

The creating, updating, and deleting of feature flags occurs via the application running at http://localhost:3001

## Create a new flag

To add a flag, first click into the app that the flag will belong to. This brings up a screen showing all of the feature flags related to that particular app. Click on the orange addition icon to bring up the add and edit flag modal. Enter a name and description for the new flag and click create.

<div style={{textAlign: 'center'}}>
  <img src={require('./../assets/createFlag.gif').default} alt='Gif of Tailslide UI creating new flag' />
</div>

## Toggling a flag

Click on the toggle icon on the right of the flag to activate and deactivate it.

<div style={{textAlign: 'center'}}>
  <img src={require('./../assets/toggleFlag.gif').default} alt='Gif of Tailslide UI toggling a flag' />
</div>

## Edit a flag

Click on a flag to bring up information about that flag. Click the edit button to bring up the add and edit flag modal. Make any desired changes and click save.

<div style={{textAlign: 'center'}}>
  <img src={require('./../assets/editFlag.gif').default} alt='Gif of Tailslide UI editing a flag' />
</div>

## Deleting a flag

Click on a flag to bring up the information screen. Use the delete button to remove that flag.

<div style={{textAlign: 'center'}}>
  <img src={require('./../assets/deleteFlag.gif').default} alt='Gif of Tailslide UI deleting a flag' />
</div>