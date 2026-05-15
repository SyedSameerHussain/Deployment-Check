import app from "./index.js";

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server listening at port ${process.env.PORT || 4000}`);
});
