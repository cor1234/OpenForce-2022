import React, { useEffect, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../FirebaseInit";
import BaseContext from "./BaseContext.js";

const BaseState = (props) => {
    const [organization, setOrganization] = useState([]);

    const getOrganization = async () => {
        var org = await callApi("/api/org/", "GET", {});
        if (!org.error) setOrganization(org.data);
        else setOrganization([]);
    };

    //endpoint is the server endpoint
    //type -> POST, GET, PUT etc
    //data is the data to be sent to server
    const callApi = async (endpoint, type, data) => {
        const url = `http://localhost:5000${endpoint}`;
        let resp;
        if (type == "GET") {
            resp = await fetch(url, {
                method: type,
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
            });
        } else {
            resp = await fetch(url, {
                method: type,
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(data),
            });
        }
        const parsed = await resp.json();
        return parsed;
    };

    //type is the extension and media type like for photo it will be image/jpg or image/png
    //e is the id for the input tag whose data to be uploaded
    // filename is the name to be given to file
    const upload = async (type, e, fileName) => {
        e = document.getElementById(e);
        const file = e.files[0];
        var fileRef = ref(storage, fileName);
        const metadata = {
            contentType: type,
        };

        await uploadBytesResumable(fileRef, file, metadata);

        const url = await getDownloadURL(fileRef);

        return url;
    };

    const alert = (type,message) =>{

    }

    return (
        <BaseContext.Provider
            value={{
                upload,
                callApi,
                getOrganization,
                organization,
                setOrganization,
                alert
            }}
        >
            {props.children}
        </BaseContext.Provider>
    );
};

export default BaseState;
