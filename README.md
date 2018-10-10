# find-my-chicken

A React Web Application that tracks user's location using IP address from the source of request.

- Built using [Material-UI](https://material-ui.com/) Kit
- [Mapbox-gl](https://www.mapbox.com/mapbox-gl-js/) to visualize maps.
- [IPApi](https://ipapi.co/) to get Location from IP address.

## How to install

* Clone the repository.
* Run `npm install` in the base directory
* Run `npm install` in the client directory also
* Run `npm run dev` in the base directory

### Demo
![Working Demo](https://res.cloudinary.com/crack-jack/image/upload/v1539098617/demo_lrs2ct.gif)

*Note*: For time being, the App only tracks 8.8.8.8

### TODO
- ~Switch between dark and light themes in Mapbox reactively.~ [#5](https://github.com/rakhi2104/find-my-chicken/pull/5)
- Dynamically locate user using IP from `req`
