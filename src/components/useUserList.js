import React, { useEffect, useState } from "react";

const useUserList = () => {
  const [userList, setUserList] = useState("");
  useEffect(() => {
    function createList(userArray) {
      setUserList(userArray);
    }
  });

  fetch("http://127.0.0.1:8000/api/current_user/", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.access}`,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(myJson.username);
    });

  return userList;
};

export default useUserList;
