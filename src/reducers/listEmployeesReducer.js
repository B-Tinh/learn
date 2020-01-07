const initialState = [
    {
        "id": 0,
        "first_name": "Anh",
        "last_name": "Smith",
        "title": "Future Directives Engineer",
        "account": {
          "email": "Baylee_Witting@yahoo.com",
          "image": "https://yt3.ggpht.com/a/AGF-l78QGTW3gMAN3s_devNGhlzjBO9eCRPGTg0iUQ=s900-c-k-c0xffffffff-no-rj-mo",
          "userName": "Jaqueline.Schuppe93"
        }
      },
      {
        "id": 1,
        "first_name": "Emely",
        "last_name": "Aufderhar",
        "title": "International Security Supervisor",
        "account": {
          "email": "Cleve.Keebler@gmail.com",
          "image": "https://s3.amazonaws.com/uifaces/faces/twitter/chandlervdw/128.jpg",
          "userName": "Grace.Morar"
        }
      },
      {
        "id": 2,
        "first_name": "Anh",
        "last_name": "Nader",
        "title": "Forward Web Analyst",
        "account": {
          "email": "Elmore_Ritchie57@yahoo.com",
          "image": "https://sohanews.sohacdn.com/thumb_w/660/2017/photo1513574827746-1513574827747.jpg",
          "userName": "Jaqueline.Schuppe93"
        }
      },
      {
        "id": 3,
        "first_name": "Clair",
        "last_name": "Kuhn",
        "title": "Dynamic Assurance Developer",
        "account": {
          "email": "Rosario_Shanahan39@yahoo.com",
          "image": "https://s3.amazonaws.com/uifaces/faces/twitter/laasli/128.jpg",
          "userName": "Name54"
        }
      },
      {
        "id": 4,
        "first_name": "Florencio",
        "last_name": "Cummerata",
        "title": "Lead Identity Architect",
        "account": {
          "email": "Louisa36@gmail.com",
          "image": "https://s3.amazonaws.com/uifaces/faces/twitter/iduuck/128.jpg",
          "userName": "Jack.Tillman43"
        }
      }
];

const employees = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default employees;
