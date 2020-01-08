import axios from "axios";

export const getUser = (username, password, history) => {
  return dispatch => {
    dispatch({
      type: "GET_INFO"
    });

    let url = "https://hrtaskapi.dhwaniris.in/index.php/api/user/login";

    var bodyFormData = new FormData();
    bodyFormData.set("username", username);
    bodyFormData.set("password", password);

    axios
      .post(url, bodyFormData)
      .then(response => {
        dispatch({
          type: "GET_INFO_SUCCESS",
          data: response.data
        });
        document.cookie = 'user_token=[success]'
        document.cookie = 'token=[1212]'
        
        history.push("/home");
      })
      .catch(error => {
        dispatch({
          type: "GET_INFO_ERROR",
          error
        });
      });
  };
};
export const getState = () => {
  return dispatch => {
    dispatch({
      type: "GET_STATE"
    });
    let url = "https://hrtaskapi.dhwaniris.in/index.php/api/master/get-state";
    const headers = {
      token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ3IiwidW5pcXVlX3VzZXJfaWQiOiIxMTg4IiwibmFtZSI6IkJhcm1lciBTb3V0aCBDb29yZGluYXRvciIsInVzZXJuYW1lIjoiMjA0MCIsIm1vYmlsZSI6Ijk5OTk5OTk5OTkiLCJsZXZlbF9pZCI6IjUiLCJwYXNzd29yZF9yZXNldF90b2tlbiI6bnVsbCwiZW1haWwiOiJhYmNuZ0BnbWFpbC5jb20iLCJhdXRoX2tleSI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwic3RhdHVzIjoiMSIsImNyZWF0ZWRfYXQiOiIwMDAwLTAwLTAwIDAwOjAwOjAwIiwidXBkYXRlZF9hdCI6IjIwMTktMTEtMDYgMDc6MTg6MDQiLCJjaGFuZ2VkX3Bhc3N3b3JkX29uY2UiOm51bGwsInVzZXJfZXJyb3JfZnJlcXVlbmN5XzEiOm51bGwsInVzZXJfZXJyb3JfZnJlcXVlbmN5XzIiOiIxOCIsInVzZXJfbGV2ZWwiOiJDbHVzdGVyIFN1cGVydmlzb3IiLCJsb2dpbl9pZCI6M30.ak3OSYopsW211SvJnzH4nNLvcj9Z4B16fR329fZbHeA`
    };

    axios({
      url,
      headers
    })
      .then(response => {
        dispatch({
          type: "GET_STATE_SUCCESS",
          data: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: "GET_STATE_ERROR",
          error
        });
      });
  };
};
export const addState = state_name => {
  return dispatch => {
    dispatch({
      type: "ADD_STATE"
    });
    let url = `https://hrtaskapi.dhwaniris.in/index.php/api/state/create`;
    const headers = {
      token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ3IiwidW5pcXVlX3VzZXJfaWQiOiIxMTg4IiwibmFtZSI6IkJhcm1lciBTb3V0aCBDb29yZGluYXRvciIsInVzZXJuYW1lIjoiMjA0MCIsIm1vYmlsZSI6Ijk5OTk5OTk5OTkiLCJsZXZlbF9pZCI6IjUiLCJwYXNzd29yZF9yZXNldF90b2tlbiI6bnVsbCwiZW1haWwiOiJhYmNuZ0BnbWFpbC5jb20iLCJhdXRoX2tleSI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwic3RhdHVzIjoiMSIsImNyZWF0ZWRfYXQiOiIwMDAwLTAwLTAwIDAwOjAwOjAwIiwidXBkYXRlZF9hdCI6IjIwMTktMTEtMDYgMDc6MTg6MDQiLCJjaGFuZ2VkX3Bhc3N3b3JkX29uY2UiOm51bGwsInVzZXJfZXJyb3JfZnJlcXVlbmN5XzEiOm51bGwsInVzZXJfZXJyb3JfZnJlcXVlbmN5XzIiOiIxOCIsInVzZXJfbGV2ZWwiOiJDbHVzdGVyIFN1cGVydmlzb3IiLCJsb2dpbl9pZCI6M30.ak3OSYopsW211SvJnzH4nNLvcj9Z4B16fR329fZbHeA`
    };
    var bodyFormData = new FormData();
    bodyFormData.set("state_name", state_name);

    axios
      .post(url, bodyFormData, { headers })
      .then(response => {
        dispatch({
          type: "ADD_STATE_SUCCESS",
          data: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: "ADD_STATE_ERROR",
          error
        });
      });
  };
};
export const getDistrict = id => {
  return dispatch => {
    dispatch({
      type: "GET_DISTRICT"
    });
    let url =
      "https://hrtaskapi.dhwaniris.in/index.php/api/master/get-district?state_id=" +
      id;
    const headers = {
      token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ3IiwidW5pcXVlX3VzZXJfaWQiOiIxMTg4IiwibmFtZSI6IkJhcm1lciBTb3V0aCBDb29yZGluYXRvciIsInVzZXJuYW1lIjoiMjA0MCIsIm1vYmlsZSI6Ijk5OTk5OTk5OTkiLCJsZXZlbF9pZCI6IjUiLCJwYXNzd29yZF9yZXNldF90b2tlbiI6bnVsbCwiZW1haWwiOiJhYmNuZ0BnbWFpbC5jb20iLCJhdXRoX2tleSI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwic3RhdHVzIjoiMSIsImNyZWF0ZWRfYXQiOiIwMDAwLTAwLTAwIDAwOjAwOjAwIiwidXBkYXRlZF9hdCI6IjIwMTktMTEtMDYgMDc6MTg6MDQiLCJjaGFuZ2VkX3Bhc3N3b3JkX29uY2UiOm51bGwsInVzZXJfZXJyb3JfZnJlcXVlbmN5XzEiOm51bGwsInVzZXJfZXJyb3JfZnJlcXVlbmN5XzIiOiIxOCIsInVzZXJfbGV2ZWwiOiJDbHVzdGVyIFN1cGVydmlzb3IiLCJsb2dpbl9pZCI6M30.ak3OSYopsW211SvJnzH4nNLvcj9Z4B16fR329fZbHeA`
    };
    axios
      .get(url, { headers })
      .then(response => {
        dispatch({
          type: "GET_DISTRICT_SUCCESS",
          data: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: "GET_DISTRICT_ERROR",
          error
        });
      });
  };
};
export const addDistrict = (state_id, district_name) => {
  return dispatch => {
    dispatch({
      type: "ADD_DISTRICT"
    });
    let url = `https://hrtaskapi.dhwaniris.in/index.php/api/district/create`;
    const headers = {
      token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ3IiwidW5pcXVlX3VzZXJfaWQiOiIxMTg4IiwibmFtZSI6IkJhcm1lciBTb3V0aCBDb29yZGluYXRvciIsInVzZXJuYW1lIjoiMjA0MCIsIm1vYmlsZSI6Ijk5OTk5OTk5OTkiLCJsZXZlbF9pZCI6IjUiLCJwYXNzd29yZF9yZXNldF90b2tlbiI6bnVsbCwiZW1haWwiOiJhYmNuZ0BnbWFpbC5jb20iLCJhdXRoX2tleSI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwic3RhdHVzIjoiMSIsImNyZWF0ZWRfYXQiOiIwMDAwLTAwLTAwIDAwOjAwOjAwIiwidXBkYXRlZF9hdCI6IjIwMTktMTEtMDYgMDc6MTg6MDQiLCJjaGFuZ2VkX3Bhc3N3b3JkX29uY2UiOm51bGwsInVzZXJfZXJyb3JfZnJlcXVlbmN5XzEiOm51bGwsInVzZXJfZXJyb3JfZnJlcXVlbmN5XzIiOiIxOCIsInVzZXJfbGV2ZWwiOiJDbHVzdGVyIFN1cGVydmlzb3IiLCJsb2dpbl9pZCI6M30.ak3OSYopsW211SvJnzH4nNLvcj9Z4B16fR329fZbHeA`
    };
    var bodyFormData = new FormData();
    bodyFormData.set("state_id", state_id);
    bodyFormData.set("district_name", district_name);

    axios
      .post(url, bodyFormData, { headers })
      .then(response => {
        dispatch({
          type: "ADD_DISTRICT_SUCCESS",
          data: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: "ADD_DISTRICT_ERROR",
          error
        });
      });
  };
};
export const getChild = () => {
  return dispatch => {
    dispatch({
      type: "GET_CHILD"
    });
    let url =
      "https://hrtaskapi.dhwaniris.in/index.php/api/beneficiary/get-child-profile";
    const headers = {
      token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjQ3IiwidW5pcXVlX3VzZXJfaWQiOiIxMTg4IiwibmFtZSI6IkJhcm1lciBTb3V0aCBDb29yZGluYXRvciIsInVzZXJuYW1lIjoiMjA0MCIsIm1vYmlsZSI6Ijk5OTk5OTk5OTkiLCJsZXZlbF9pZCI6IjUiLCJwYXNzd29yZF9yZXNldF90b2tlbiI6bnVsbCwiZW1haWwiOiJhYmNuZ0BnbWFpbC5jb20iLCJhdXRoX2tleSI6ImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlIiwic3RhdHVzIjoiMSIsImNyZWF0ZWRfYXQiOiIwMDAwLTAwLTAwIDAwOjAwOjAwIiwidXBkYXRlZF9hdCI6IjIwMTktMTEtMDYgMDc6MTg6MDQiLCJjaGFuZ2VkX3Bhc3N3b3JkX29uY2UiOm51bGwsInVzZXJfZXJyb3JfZnJlcXVlbmN5XzEiOm51bGwsInVzZXJfZXJyb3JfZnJlcXVlbmN5XzIiOiIxOCIsInVzZXJfbGV2ZWwiOiJDbHVzdGVyIFN1cGVydmlzb3IiLCJsb2dpbl9pZCI6M30.ak3OSYopsW211SvJnzH4nNLvcj9Z4B16fR329fZbHeA`
    };

    axios({
      url,
      headers
    })
      .then(response => {
        dispatch({
          type: "GET_CHILD_SUCCESS",
          data: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: "GET_CHILD_ERROR",
          error
        });
      });
  };
};
export const addData = (
  Name,
  Sex,
  dob,
  father_name,
  mother_name,
  district_Id,
  photo
) => {
  return dispatch => {
    dispatch({
      type: "ADD_DATA"
    });
    let url = `https://hrtaskapi.dhwaniris.in/index.php/api/beneficiary/child-profile-create`;

    const headers = {
      "Content-Type": "application/json",
      token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEwMTEiLCJ1bmlxdWVfdXNlcl9pZCI6IjEwMTEiLCJuYW1lIjoiU3dhdGkgU29tYW5pIiwidXNlcm5hbWUiOiIxNDEyIiwibW9iaWxlIjoiNjM3NzE0NzU3MiIsImxldmVsX2lkIjoiNSIsInBhc3N3b3JkX3Jlc2V0X3Rva2VuIjoiMTQyNDg3IiwiZW1haWwiOiJzd2F0aXNvbWFuaTk1QGdtYWlsLmNvbSIsImF1dGhfa2V5IjoiZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2UiLCJzdGF0dXMiOiIxIiwiY3JlYXRlZF9hdCI6IjAwMDAtMDAtMDAgMDA6MDA6MDAiLCJ1cGRhdGVkX2F0IjoiMjAxOS0xMC0xNSAwNzowNjoxMiIsImNoYW5nZWRfcGFzc3dvcmRfb25jZSI6bnVsbCwidXNlcl9lcnJvcl9mcmVxdWVuY3lfMSI6bnVsbCwidXNlcl9lcnJvcl9mcmVxdWVuY3lfMiI6IjMiLCJ1c2VyX2xldmVsIjoiQ2x1c3RlciBTdXBlcnZpc29yIiwibG9naW5faWQiOjR9.jDfocuaZhPcTyefEm-ZH-VOdPEsUdc-r8-bdAW-MJwI",
    };

    const body = {
      name: Name,
      sex: Sex,
      dob: dob,
      father_name: father_name,
      mother_name: mother_name,
      district_id: district_Id,
      "photo": "https://staging-dhwani.s3.ap-south-1.amazonaws.com/82ac44b1c5d7ef91a9e912abca5fc3f5.jpg"
    };
    // const body = {
    //   "name": "Jhon Solanki",
    //   "sex": "1",
    //   "dob": "1992-06-15",
    //   "father_name": "Peter Solanki",
    //   "mother_name": "Julie Solanki",
    //   "district_id": 1,
    //   "photo": "https://staging-dhwani.s3.ap-south-1.amazonaws.com/82ac44b1c5d7ef91a9e912abca5fc3f5.jpg"
    // };

    axios
      .post(url, body, { headers })
      .then(response => {
        dispatch({
          type: "ADD_DATA_SUCCESS",
          data: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: "ADD_DATA_ERROR",
          error
        });
      });
  };
};
