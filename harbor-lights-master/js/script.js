//function that display error under input according to a condition
function showError(condition, id, msg, color) {
  if (condition) {
    document.getElementById(id).innerHTML = "";
  } else {
    document.getElementById(id).innerHTML = msg;
    document.getElementById(id).style.color = color;
  }
}

// function that search object by ID (ID is unique)
function searchObjectById(id, key) {
  var T = JSON.parse(localStorage.getItem(key) || "[]");
  var findedObject = {};
  for (let i = 0; i < T.length; i++) {
    if (T[i].id == id) {
      findedObject = T[i];
      break;
    }
  }
  return findedObject;
}

// function that checks if email exist
function verifEmail(email) {
  var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
  var exist = false;
  for (let i = 0; i < usersTab.length; i++) {
    if (usersTab[i].email == email) {
      exist = true;
      break;
    }
  }
  return exist;
}

// function that checks if Phone number exist
function verifPhone(phone) {
  var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
  var exist = false;
  for (let i = 0; i < usersTab.length; i++) {
    if (usersTab[i].phone == phone) {
      exist = true;
      break;
    }
  }
  return exist;
}

// function that returns max value from array of objects
function generateId(T) {
  var max;
  if (T.length == 0) {
    max = 0;
  } else {
    max = T[0].id;
    for (let i = 1; i < T.length; i++) {
      if (T[i].id > max) {
        max = T[i].id;
      }
    }
  }
  return max;
}

// function that add an Owner into LS
function signupOwner() {
  var firstName = document.getElementById("firstName").value;
  showError(
    firstName.length > 2,
    "firstNameError",
    "First Name must have at least 3 chars",
    "red"
  );
  var lastName = document.getElementById("lastName").value;
  showError(
    lastName.length > 2,
    "lastNameError",
    "last Name must have at least 3 chars",
    "red"
  );
  var email = document.getElementById("email").value;
  showError(verifEmail(email) == false, "emailError", "Email exist", "red");

  var password = document.getElementById("pwd").value;
  showError(
    password.length >= 6 && password.length <= 12,
    "pwdError",
    "Pwd must have between 6 and 12 chars",
    "red"
  );

  var phone = document.getElementById("phone").value;

  showError(
    verifPhone(phone) == false && phone.length == 8,
    "phoneError",
    "Check phone number / phone number already used",
    "red"
  );
  var fax = document.getElementById("fax").value;

  showError(fax.length == 8, "faxError", "Check fax number", "red");

  var address = document.getElementById("address").value;
  showError(
    address.length > 5,
    "addressError",
    "Address must have at least 6 chars",
    "red"
  );
  var patent = document.getElementById("patent").value;
  showError(
    patent.length == 7,
    "patentError",
    "patent must have 7 chars",
    "red"
  );
  // Save owner only if all condition are satisfied
  if (
    firstName.length > 2 &&
    lastName.length > 2 &&
    phone.length == 8 &&
    verifPhone(phone) == false &&
    fax.length == 8 &&
    password.length >= 6 &&
    password.length <= 12 &&
    verifEmail(email) == false &&
    address.length > 5 &&
    patent.length == 7
  ) {
    // Get all users from LS
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    var user = {
      id: generateId(usersTab) + 1,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
      fax: fax,
      address: address,
      patent: patent,
      role: "Owner",
    };

    // save object to LS
    usersTab.push(user);
    localStorage.setItem("users", JSON.stringify(usersTab));
    location.replace("login.html");
  }
}

// function that add a Client into LS
function signupClient() {
  var firstName = document.getElementById("clientFirstName").value;
  showError(
    firstName.length > 2,
    "clientFirstNameError",
    "First Name must have at least 3 chars",
    "red"
  );

  var lastName = document.getElementById("clientLastName").value;
  showError(
    lastName.length > 2,
    "clientLastNameError",
    "last Name must have at least 3 chars",
    "red"
  );

  var email = document.getElementById("clientEmail").value;
  showError(
    verifEmail(email) == false,
    "clientEmailError",
    "Email exist",
    "red"
  );

  var password = document.getElementById("clientPwd").value;
  showError(
    password.length >= 6 && password.length <= 12,
    "clientPwdError",
    "Pwd must have between 6 and 12 chars",
    "red"
  );

  var phone = document.getElementById("clientPhone").value;

  showError(
    verifPhone(phone) == false && phone.length == 8,
    "clientPhoneError",
    "Check phone number / phone number already used",
    "red"
  );
  var address = document.getElementById("clientAddress").value;
  showError(
    address.length > 5,
    "clientAddressError",
    "Address must have at least 6 chars",
    "red"
  );
  // Save client only if all condition are satisfied
  if (
    firstName.length > 2 &&
    lastName.length > 2 &&
    phone.length == 8 &&
    verifPhone(phone) == false &&
    password.length >= 6 &&
    password.length <= 12 &&
    verifEmail(email) == false &&
    address.length > 5
  ) {
    // Get all users from LS
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    var user = {
      id: generateId(usersTab) + 1,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
      address: address,
      role: "Client",
    };

    // save object to LS
    usersTab.push(user);
    localStorage.setItem("users", JSON.stringify(usersTab));
    location.replace("login.html");
  }
}
// function that add an Admin into LS
function signupAdmin() {
  var firstName = document.getElementById("adminFirstName").value;
  showError(
    firstName.length > 2,
    "adminFirstNameError",
    "First Name must have at least 3 chars",
    "red"
  );

  var lastName = document.getElementById("adminLastName").value;
  showError(
    lastName.length > 2,
    "adminLastNameError",
    "last Name must have at least 3 chars",
    "red"
  );

  var email = document.getElementById("adminEmail").value;
  showError(
    verifEmail(email) == false,
    "adminEmailError",
    "Email exist",
    "red"
  );

  var password = document.getElementById("adminPwd").value;
  showError(
    password.length >= 6 && password.length <= 12,
    "adminPwdError",
    "Pwd must have between 6 and 12 chars",
    "red"
  );

  var phone = document.getElementById("adminPhone").value;

  showError(
    verifPhone(phone) == false && phone.length == 8,
    "adminPhoneError",
    "Check phone number / phone number already used",
    "red"
  );
  // Save client only if all condition are satisfied
  if (
    firstName.length > 2 &&
    lastName.length > 2 &&
    phone.length == 8 &&
    verifPhone(phone) == false &&
    password.length >= 6 &&
    password.length <= 12 &&
    verifEmail(email) == false
  ) {
    // Get all users from LS
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    var user = {
      id: generateId(usersTab) + 1,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
      role: "Admin",
    };

    // save object to LS
    usersTab.push(user);
    localStorage.setItem("users", JSON.stringify(usersTab));
    location.replace("login.html");
  }
}

// function Login: search user by email and password
function login() {
  // get phone value from input
  var phone = document.getElementById("phoneId").value;
  // get pwd value from input
  var password = document.getElementById("pwdId").value;

  // Get all users from LS
  var usersTab = JSON.parse(localStorage.getItem("users") || "[]");

  // Hypo: user does not exist
  var userExist = false;
  var user;
  // Loop user by user
  for (let i = 0; i < usersTab.length; i++) {
    // check if phone and pwd are correct
    if (usersTab[i].phone == phone && usersTab[i].password == password) {
      user = usersTab[i];
      userExist = true;
      break;
    }
  }
  if (userExist == true) {
    localStorage.setItem("connectedUserId", user.id);
    location.replace("index.html");
  } else {
    document.getElementById("loginError").innerHTML =
      "Please check Phone number / Password";
    document.getElementById("loginError").style.color = "red";
  }
}

//function that do the first step of house adding
function HouseAddStepOne() {
  var name = document.getElementById("houseName").value;
  showError(name.length > 1, "houseNameError", "Name Invalid", "red");
  var address = document.getElementById("houseAddress").value;
  showError(address.length > 4, "houseAddressError", "Address Invalid", "red");
  var view = document.getElementById("houseView").value;
  showError(view.length > 2, "houseViewError", "house View Invalid", "red");
  var city = document.getElementById("houseCity").value;
  showError(city.length > 2, "houseCityError", "City Invalid", "red");
  var rooms = document.getElementById("houseRooms").value;
  showError(
    rooms >= 1 && rooms <= 10,
    "houseRoomsError",
    "Rooms number have to be between 1 and 10 rooms",
    "red"
  );

  if (
    name.length > 1 &&
    address.length > 4 &&
    view.length > 2 &&
    city.length > 2 &&
    rooms >= 1 &&
    rooms <= 10
  ) {
    nextAndPrevious();
    displayRooms("houseRooms");
  } else {
    alert("Check values");
  }
}
// function that add a house into LS
function HouseAddStepTwo() {
  var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  var connectedUser = localStorage.getItem("connectedUserId");
  var roomsNumber = document.getElementById("houseRooms").value;
  var roomsTab = JSON.parse(localStorage.getItem("rooms") || "[]");
  var roomId = generateId(roomsTab);
  var addRoomsTab = [];
  var houseId = generateId(housesTab) + 1;
  var comp = 0;
  for (let i = 0; i < roomsNumber; i++) {
    var name = document.getElementById("roomName" + i).value;
    showError(name.length >= 1, "roomNameError" + i, "invalid Name", "red");

    var price = document.getElementById("roomPrice" + i).value;
    showError(
      price >= 1 && price <= 2000,
      "roomPriceError" + i,
      "Price have to be between 1$ and 2000$",
      "red"
    );

    var size = document.getElementById("roomSize" + i).value;
    showError(size >= 4, "roomSizeError" + i, "size have to be >= 4m²", "red");

    var capacity = document.getElementById("roomCapacity" + i).value;
    showError(
      capacity >= 1 && capacity <= 8,
      "roomCapacityError" + i,
      "Capacity have to be between 1 and 8 persons",
      "red"
    );

    var bed = document.getElementById("roomBed" + i).value;
    showError(
      bed >= 1 && bed <= 4,
      "roomBedError" + i,
      "beds number have to be between 1 and 4 beds",
      "red"
    );

    var description = document.getElementById("roomDescription" + i).value;
    if (
      name.length >= 1 &&
      price >= 1 &&
      price <= 2000 &&
      size >= 4 &&
      capacity >= 1 &&
      capacity <= 8 &&
      bed >= 1 &&
      bed <= 4
    ) {
      //adding every room to the rooms array without send it to Ls

      roomId += 1;
      var room = {
        id: roomId,
        name: name,
        price: price,
        size: size,
        capacity: capacity,
        bed: bed,
        description: description,
        houseId: houseId,
      };

      roomsTab.push(room);
      comp += 1;
    }
  }
  if (comp == roomsNumber) {
    //adding the house to Ls
    var houseName = document.getElementById("houseName").value;
    var address = document.getElementById("houseAddress").value;
    var view = document.getElementById("houseView").value;
    var city = document.getElementById("houseCity").value;
    var rooms = document.getElementById("houseRooms").value;
    var house = {
      id: houseId,
      name: houseName,
      address: address,
      view: view,
      city: city,
      rooms: rooms,
      status: "Not Confirmed",
      ownerId: connectedUser,
    };
    housesTab.push(house);
    localStorage.setItem("houses", JSON.stringify(housesTab));
    //adding the rooms to Ls
    localStorage.setItem("rooms", JSON.stringify(roomsTab));
    location.replace("houses.html");
  } else {
    alert("Check values");
  }
}

//function that navigate in addhouse page between add house section and add rooms section
function nextAndPrevious() {
  var x = document.getElementById("previousId");
  var y = document.getElementById("NextId");

  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}
//function that display form to add rooms wof the new house
function displayRooms(id) {
  var roomsNumber = document.getElementById(id).value;
  var result = "";
  for (let i = 0; i < roomsNumber; i++) {
    result += `         <div class="col-lg-4 col-md-6">
   <div class="room-item">
     <p class="star mb-0 text-center">
       <span class="ion-ios-star"> Room N°${i + 1}</span>
     </p>
     <img src="images/add-room.jpg" alt="" class="img-fluid" />
     <div class="ri-text">
       <table>
         <tbody>
           <tr>
             <td>
               <div class="groupRooms">
                 <input type="text" required id="roomName${i}"/>
                 <span class="highlight"></span>
                 <span class="bar"></span>
                 <label>Name:</label>
                 <span id="roomNameError${i}"></span>
               </div>
             </td>
           </tr>
           <tr>
             <td>
               <div class="groupRooms">
                 <input type="text" required id="roomPrice${i}"/>
                 <span class="highlight"></span>
                 <span class="bar"></span>
                 <label>Price:$/Pernight</label>
                 <span id="roomPriceError${i}"></span>

               </div>
             </td>
           </tr>
           <tr>
             <td>
               <div class="groupRooms">
                 <input type="text" required id="roomSize${i}"/>
                 <span class="highlight"></span>
                 <span class="bar"></span>
                 <label>Size:</label>
                 <span id="roomSizeError${i}"></span>

               </div>
             </td>
           </tr>
           <tr>
             <td>
               <div class="groupRooms">
                 <input type="number" required id="roomCapacity${i}"/>
                 <span class="highlight"></span>
                 <span class="bar"></span>
                 <label>Capacity:</label>
                 <span id="roomCapacityError${i}"></span>

               </div>
             </td>
           </tr>
           <tr>
             <td>
               <div class="groupRooms">
                 <input type="number" required id="roomBed${i}"/>
                 <span class="highlight"></span>
                 <span class="bar"></span>
                 <label>Bed:</label>
                 <span id="roomBedError${i}"></span>

               </div>
             </td>
           </tr>
           <tr>
             <td>
               <div class="groupRooms">
                 <input type="text" required id="roomDescription${i}"/>
                 <span class="highlight"></span>
                 <span class="bar"></span>
                 <label>Description:</label>
                 <span id="roomDescriptionError${i}"></span>

               </div>
             </td>
           </tr>
         </tbody>
       </table>
     </div>
   </div>
 </div>
 `;
  }

  document.getElementById("displayRoomsId").innerHTML = result;
}

// function that displays houses into houses page
function displayOwnerHouses() {
  var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  var connectedUser = localStorage.getItem("connectedUserId");
  var user = searchObjectById(connectedUser, "users");
  var result = "";
  result += `        <div class="row no-gutters justify-content-center mb-5 pb-3">
  <div class="col-md-7 heading-section text-center ftco-animate">
    <span class="subheading">Angels Houses</span>
    <h6> welcome to your houses </h6>
    <h2 class="mb-4">${user.firstName} ${user.lastName} Houses:</h2>
  </div>
</div>
<div class="row no-gutters"> `;
  for (let i = 0; i < housesTab.length; i++) {
    if (housesTab[i].ownerId == connectedUser) {
      result += `
      
        <div class="col-lg-6 mb-3">
          <div class="room-wrap d-md-flex ftco-animate">
            <a
              href="#"
              class="img"
              style="background-image: url(images/room-6.jpg)"
            ></a>
            <div class="half left-arrow d-flex align-items-center">
              <div class="text p-sm-2 text-center">
                <p class="star mb-0">
                  <span class="ion-ios-star"></span
                  ><span class="ion-ios-star"></span
                  ><span class="ion-ios-star"></span
                  ><span class="ion-ios-star"></span
                  ><span class="ion-ios-star"></span>
                </p>
                <h3>${housesTab[i].name}</h3>
                <span class="per">City: ${housesTab[i].city}</span>
                <span class="per">View: ${housesTab[i].view}</span>
                <span class="per">Rooms: ${housesTab[i].rooms}</span>
                <p>
                <span class="per">Address: ${housesTab[i].address}</span></p>
                <div style="margin-top: 15px">
                  <p class="pt-1">
                    <a
                      href="#"
                      class="btn-custom btn-custom-view px-3 py-2 rounded"
                      onclick="goToDisplayHouseRooms(${housesTab[i].id})"
                      >View Rooms <span class="icon-long-arrow-right"></span
                    ></a>
                  </p>
                  <p class="pt-1">
                    <a
                    href="#"
                      class="btn-custom btn-custom-edit px-3 py-2 rounded"onclick="goToEditHouse(${housesTab[i].id})"
                      >Edit House <span class="icon-long-arrow-right"></span
                    ></a>
                  </p>
                  <p class="pt-1" >
                    <a
                    href="#"
                      class="btn-custom btn-custom-delete px-3 py-2 rounded" data-toggle="modal" data-target="#exampleModal${i}"
                      >Delete House <span class="icon-long-arrow-right"></span
                    ></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div
          class="modal fade"
          id="exampleModal${i}"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div
                class="modal-body"
                style="color: black; font-size: x-large"
              >
                Do you really want to delete "${housesTab[i].name}" ?
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-success"
                  data-dismiss="modal"
                >
                  Return
                </button>
                <button type="button" class="btn btn-danger" onclick="deleteHouse(${housesTab[i].id})">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
          `;
    }
  }

  document.getElementById("displayHousesId").innerHTML = result;
}
// function that displays all houses for a client into houses page
function displayAllHouses() {
  var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  var result = "";
  result += `        <div class="row no-gutters justify-content-center mb-5 pb-3">
  <div class="col-md-7 heading-section text-center ftco-animate">
    <span class="subheading">Angels Houses</span>
    <h6> welcome to our houses </h6>
  </div>
</div>
<div class="row no-gutters"> `;
  for (let i = 0; i < housesTab.length; i++) {
    if (housesTab[i].status == "Confirmed") {
      result += `
      
      <div class="col-lg-6 mb-3">
        <div class="room-wrap d-md-flex ftco-animate">
          <a
            href="#"
            class="img"
            style="background-image: url(images/room-6.jpg)"
          ></a>
          <div class="half left-arrow d-flex align-items-center">
            <div class="text p-sm-2 text-center">
              <p class="star mb-0">
                <span class="ion-ios-star"></span
                ><span class="ion-ios-star"></span
                ><span class="ion-ios-star"></span
                ><span class="ion-ios-star"></span
                ><span class="ion-ios-star"></span>
              </p>
              <h3>${housesTab[i].name}</h3>
              <span class="per">City: ${housesTab[i].city}</span>
              <span class="per">View: ${housesTab[i].view}</span>
              <span class="per">Rooms: ${housesTab[i].rooms}</span>
              <p>
              <span class="per">Address: ${housesTab[i].address}</span></p>
              <div style="margin-top: 15px">
                <p class="pt-1">
                  <a
                    href="#"
                    class="btn-custom btn-custom-view px-3 py-2 rounded"
                    onclick="goToReserveHouseRooms(${housesTab[i].id})"
                    >View Rooms <span class="icon-long-arrow-right"></span
                  ></a>
                </p>
                <p class="pt-1">
                  <a
                  href="#"
                    class="btn-custom btn-custom-edit px-3 py-2 rounded"onclick="goToReserveHouseRooms(${housesTab[i].id})"
                    >Check Availability
                    <span class="icon-long-arrow-right"></span
                  ></a>
                </p>
                <p class="pt-1" >
                  <a
                  href="contact.html"
                    class="btn-custom btn-custom-delete px-3 py-2 rounded" 
                    >Contact Us <span class="icon-long-arrow-right"></span
                  ></a>
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>

        `;
    }
  }

  document.getElementById("displayHousesId").innerHTML = result;
}

// function that displays all houses for a client into houses page
function displayAllHousesForAdmin() {
  var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  var result = "";
  result += `        <div class="row no-gutters justify-content-center mb-5 pb-3">
  <div class="col-md-7 heading-section text-center ftco-animate">
    <span class="subheading">Angels Houses</span>
    <h6> welcome to our houses </h6>
  </div>
</div>
<div class="row no-gutters"> `;
  for (let i = 0; i < housesTab.length; i++) {
    result += `
      
        <div class="col-lg-6 mb-3">
          <div class="room-wrap d-md-flex ftco-animate">
            <a
              href="#"
              class="img"
              style="background-image: url(images/room-6.jpg)"
            ></a>
            <div class="half left-arrow d-flex align-items-center">
              <div class="text p-sm-2 text-center">
                <p class="star mb-0">
                  <span class="ion-ios-star"></span
                  ><span class="ion-ios-star"></span
                  ><span class="ion-ios-star"></span
                  ><span class="ion-ios-star"></span
                  ><span class="ion-ios-star"></span>
                </p>
                <h3>${housesTab[i].name}</h3>
                <span class="per">City: ${housesTab[i].city}</span>
                <span class="per">View: ${housesTab[i].view}</span>
                <span class="per">Rooms: ${housesTab[i].rooms}</span>
                <p>
                <span class="per">Address: ${housesTab[i].address}</span></p>
                
                <span class="per">status: ${housesTab[i].status}</span>
                <div style="margin-top: 15px">
                <p class="pt-1">
                <a
                  href="#"
                  class="btn-custom btn-custom-validate px-3 py-2 rounded"
                  onclick="validateHouse(${housesTab[i].id})"
                  >Validate house <span class="icon-long-arrow-right"></span
                ></a>
              </p>
                <p class="pt-1">
                <a
                  href="#"
                  class="btn-custom btn-custom-view px-3 py-2 rounded"
                  onclick="goToDisplayHouseRooms(${housesTab[i].id})"
                  >View Rooms <span class="icon-long-arrow-right"></span
                ></a>
              </p>
              <p class="pt-1">
                <a
                href="#"
                  class="btn-custom btn-custom-edit px-3 py-2 rounded"onclick="goToEditHouse(${housesTab[i].id})"
                  >Edit House <span class="icon-long-arrow-right"></span
                ></a>
              </p>
              <p class="pt-1" >
                <a
                href="#"
                  class="btn-custom btn-custom-delete px-3 py-2 rounded" data-toggle="modal" data-target="#exampleModal${i}"
                  >Delete House <span class="icon-long-arrow-right"></span
                ></a>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div
      class="modal fade"
      id="exampleModal${i}"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div
            class="modal-body"
            style="color: black; font-size: x-large"
          >
            Do you really want to delete "${housesTab[i].name}" ?
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-success"
              data-dismiss="modal"
            >
              Return
            </button>
            <button type="button" class="btn btn-danger" onclick="deleteHouse(${housesTab[i].id})">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
      `;
  }

  document.getElementById("displayHousesId").innerHTML = result;
}

//function that display houses throw houses page according to the role of the user (Client/Owner)
function displayHouses() {
  // var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  // var connectedUser = localStorage.getItem("connectedUserId");
  var role = verifyRole();
  if (role == "Owner") {
    displayOwnerHouses();
  } else if (role == "Client") {
    displayAllHouses();
  } else {
    displayAllHousesForAdmin();
  }
}
// function that navigates to rooms page from houses page
function goToDisplayHouseRooms(id) {
  localStorage.setItem("houseId", id);
  location.replace("rooms.html");
}

// function that displays rooms into rooms page
function displayHouseRooms(msg, distinationPage) {
  var id = localStorage.getItem("houseId");
  var house = searchObjectById(id, "houses");
  var roomsTab = JSON.parse(localStorage.getItem("rooms") || "[]");
  var result = "";
  result = `
  <div class="row no-gutters justify-content-center mb-5 pb-3">
  <div class="col-md-7 heading-section text-center ftco-animate">
    <span class="subheading">Welcome to:</span>
    <h2 class="mb-4"> "${house.name}" Rooms:</h2>
  </div>
</div>


<section class="hp-room-section">
  <div class="container">
    <div class="hp-room-items">
      <div class="row" >
 `;
  for (let i = 0; i < roomsTab.length; i++) {
    if (roomsTab[i].houseId == id) {
      result += `            <div class="col-lg-4 col-md-6 mb-5">
  <div class="hp-room-item set-bg" data-setbg="images/room-b1.jpg">
    <img src="images/room-b2.jpg" alt="" />
    <div class="hr-text">
      <h3>${roomsTab[i].name}</h3>
      <h2>${roomsTab[i].price}$<span>/Pernight</span></h2>
      <table>
        <tbody>
          <tr>
            <td class="r-o">Size:</td>
            <td>${roomsTab[i].size} m²</td>
          </tr>
          <tr>
            <td class="r-o">Capacity:</td>
            <td>Max ${roomsTab[i].capacity} person(s)</td>
          </tr>
          <tr>
            <td class="r-o">Bed:</td>
            <td>${roomsTab[i].bed} Bed(s)</td>
          </tr>
          <tr>
            <td class="r-o">Services:</td>
            <td>Wifi, Television, Bathroom,...</td>
          </tr>
        </tbody>
      </table>
      <a  href="${distinationPage}" class="primary-btn-sona" style="width:50%" onclick="sendIdRoom(${roomsTab[i].id})" >${msg}</a>
    </div>
  </div>
</div>     `;
    }
  }
  result += `</div>
</div>
</div>
</section>`;
  document.getElementById("displayHouseRoomsId").innerHTML = result;
}
//function that strict the number of houses that can be added by an owner (max 3 houses)
function houseAddingRestriction() {
  var connectedUser = localStorage.getItem("connectedUserId");
  var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  var housesNumber = 0;
  for (let i = 0; i < housesTab.length; i++) {
    if (housesTab[i].ownerId == connectedUser) {
      housesNumber += 1;
    }
  }
  if (housesNumber > 2) {
    alert("you have reached the number max of house that can be added");
  } else {
    location.replace("addhouse.html");
  }
}

//function that navigate to edit house page
function goToEditHouse(id) {
  localStorage.setItem("houseId", id);
  location.replace("edithouse.html");
}

//function that display the edit house details section
function displayHouseEditing() {
  var houseId = localStorage.getItem("houseId");
  var house = searchObjectById(houseId, "houses");
  var result = "";
  result += `<h2 class="mb-4">
  <span>House Details Modification:</span>
</h2>
<div class="d-md-flex mt-5 mb-3 justify-content-between">
  <ul class="list">
    <li><span>Name:</span> <input class="editInput" type="text" required id="newHouseName" value="${house.name}"/>  </li>
    <span id="newHouseNameError"></span>
    <li><span>View:</span><input class="editInput" type="text" required id="newHouseView" value="${house.view}"/></li>
    <span id="newHouseViewError"></span>
  </ul>
  <ul class="list">
    <li><span>City:</span><input class="editInput" type="text" required id="newHouseCity" value="${house.city}"/> </li>
    <span id="newHouseCityError"></span>
    <li><span>Address:</span><input class="editInput" type="text" required id="newHouseAddress" value="${house.address}"/> </li>
    <span id="newHouseAddressError"></span>
  </ul>
</div>
`;
  document.getElementById("houseeditingId").innerHTML = result;
}
//function that display the edit room section
function displayRoomsEditing() {
  var houseId = localStorage.getItem("houseId");
  var roomsTab = JSON.parse(localStorage.getItem("rooms") || "[]");
  var comp = 1;
  var result = "";
  for (let i = 0; i < roomsTab.length; i++) {
    if (roomsTab[i].houseId == houseId) {
      result += `          <div class="col-12 col-lg-4 col-md-6">
      <div class="room-item">
        <p class="star mb-0 text-center">
          <span class="ion-ios-star"> Room N°${comp}</span>
        </p>
        <img src="images/add-room.jpg" alt="" class="img-fluid" />
        <div class="ri-text">
          <table>
            <tbody>
              <tr>
                <td>
                  <div class="groupRooms">
                    <input type="text" required id="roomName${i}" value="${roomsTab[i].name}"/>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Name:</label>
                    <span id="roomNameError${i}"></span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="groupRooms">
                    <input type="text" required id="roomPrice${i}" value="${roomsTab[i].price}"/>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Price:$/Pernight</label>
                    <span id="roomPriceError${i}"></span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="groupRooms">
                    <input type="text" required id="roomSize${i}" value="${roomsTab[i].size}" />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Size:</label>
                    <span id="roomSizeError${i}"></span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="groupRooms">
                    <input type="number" required id="roomCapacity${i}" value="${roomsTab[i].capacity}" />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Capacity:</label>
                    <span id="roomCapacityError${i}"></span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="groupRooms">
                    <input type="number" required id="roomBed${i}" value="${roomsTab[i].bed}" />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Bed:</label>
                    <span id="roomBedError${i}"></span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="groupRooms">
                    <input
                      type="text"
                      required
                      id="roomDescription${i}"
                      value="${roomsTab[i].description}"/>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Description:</label>
                    <span id="roomDescriptionError${i}"></span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <p class="pt-1 text-center">
            <button
              type="button"
              class="btn btn-danger px-3 py-2 rounded"
              data-toggle="modal"
              data-target="#exampleModal${i}"
             
            >
              Delete Room
            </button>
          </p>
          <div
          class="modal fade"
          id="exampleModal${i}"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div
                class="modal-body"
                style="color: black; font-size: x-large"
              >
                Do you really want to delete "${roomsTab[i].name}" ?
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-success"
                  data-dismiss="modal"
                >
                  Return
                </button>
                <button type="button" class="btn btn-danger" onclick="deleteRoom(${roomsTab[i].id})">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
          `;
      comp += 1;
      console.log(roomsTab[i].id);
    }
  }

  document.getElementById("roomsEditingId").innerHTML = result;
}

//function that edit the house details
function editHouse() {
  var houseId = localStorage.getItem("houseId");
  var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  var result = false;
  var name = document.getElementById("newHouseName").value;
  showError(name.length > 1, "newHouseNameError", "Name Invalid", "red");
  var address = document.getElementById("newHouseAddress").value;
  showError(
    address.length > 4,
    "newHouseAddressError",
    "Address Invalid",
    "red"
  );
  var view = document.getElementById("newHouseView").value;
  showError(view.length > 2, "newHouseViewError", "house View Invalid", "red");
  var city = document.getElementById("newHouseCity").value;
  showError(city.length > 2, "newHouseCityError", "City Invalid", "red");
  if (
    name.length > 1 &&
    address.length > 4 &&
    view.length > 2 &&
    city.length > 2
  ) {
    for (let i = 0; i < housesTab.length; i++) {
      if (housesTab[i].id == houseId) {
        housesTab[i].name = name;
        housesTab[i].address = address;
        housesTab[i].view = view;
        housesTab[i].city = city;
        break;
      }
    }
    localStorage.setItem("houses", JSON.stringify(housesTab));
    result = true;
  } else {
    alert("Check values");
  }
  return result;
}

//function that edit existent rooms
function editRooms() {
  var roomsTab = JSON.parse(localStorage.getItem("rooms") || "[]");
  var houseId = localStorage.getItem("houseId");
  var house = searchObjectById(houseId, "houses");
  var roomsNumber = Number(house.rooms);
  var comp = 0;
  for (let i = 0; i < roomsTab.length; i++) {
    if (roomsTab[i].houseId == houseId) {
      var name = document.getElementById("roomName" + i).value;
      showError(name.length >= 1, "roomNameError" + i, "invalid Name", "red");

      var price = document.getElementById("roomPrice" + i).value;
      showError(
        price >= 1 && price <= 2000,
        "roomPriceError" + i,
        "Price have to be between 1$ and 2000$",
        "red"
      );

      var size = document.getElementById("roomSize" + i).value;
      showError(
        size >= 4,
        "roomSizeError" + i,
        "size have to be >= 4m²",
        "red"
      );

      var capacity = document.getElementById("roomCapacity" + i).value;
      showError(
        capacity >= 1 && capacity <= 8,
        "roomCapacityError" + i,
        "Capacity have to be between 1 and 8 persons",
        "red"
      );

      var bed = document.getElementById("roomBed" + i).value;
      showError(
        bed >= 1 && bed <= 4,
        "roomBedError" + i,
        "beds number have to be between 1 and 4 beds",
        "red"
      );

      var description = document.getElementById("roomDescription" + i).value;
      if (
        name.length >= 1 &&
        price >= 1 &&
        price <= 2000 &&
        size >= 4 &&
        capacity >= 1 &&
        capacity <= 8 &&
        bed >= 1 &&
        bed <= 4
      ) {
        roomsTab[i].name = name;
        roomsTab[i].price = price;
        roomsTab[i].size = size;
        roomsTab[i].capacity = capacity;
        roomsTab[i].bed = bed;
        roomsTab[i].description = description;
        comp += 1;
      }
    }
  }

  if (comp == roomsNumber) {
    //adding the rooms to Ls
    localStorage.setItem("rooms", JSON.stringify(roomsTab));
  } else {
    alert("Check values");
  }
}

//function that confirm the modification of house and rooms throw edithouse page
function confirmEdit() {
  editHouse();
  editRooms();
}

//function that verify the number of rooms in a house and return the number of rooms that can be added
function verifyRoomsNumber() {
  var houseId = localStorage.getItem("houseId");
  var house = searchObjectById(houseId, "houses");
  var result = 10 - Number(house.rooms);
  return result;
}

//function that navigate to new rooms adding page if condition is true
function goToNewRoomAdd() {
  var newRoomsNumber = verifyRoomsNumber();
  if (newRoomsNumber != 0) {
    location.replace("addrooms.html");
  } else {
    alert(
      "you have reached the number max of rooms in one house (max 10 rooms)"
    );
  }
}

//function that display the new rooms editing section
function displayNewRoomsAdding() {
  var maxRoomsNumber = verifyRoomsNumber();
  console.log(maxRoomsNumber);
  var roomsNumber = document.getElementById("NewRooms").value;
  if (maxRoomsNumber >= Number(roomsNumber) && roomsNumber != 0) {
    displayRooms("NewRooms");
    document.getElementById("addNewRoomsBtnId").innerHTML = `            <button
    class="btn btn-primary btn-lg btn-block"
    type="button"
    onclick="addNewRooms()"
  >
    Add New Rooms
  </button>`;
  } else if (roomsNumber == 0) {
    alert("you should enter new room(s) number");
    location.reload();
  } else {
    alert(
      "you have reached the number max of rooms in one house (max 10 rooms)"
    );
    location.reload();
  }
}

// function that add anew rooms to an house throw edit house page
function addNewRooms() {
  var roomsNumber = document.getElementById("NewRooms").value;
  var roomsTab = JSON.parse(localStorage.getItem("rooms") || "[]");
  var roomId = generateId(roomsTab);
  var addNewRoomsTab = [];
  var houseId = localStorage.getItem("houseId");
  var comp = 0;
  for (let j = 0; j < roomsNumber; j++) {
    var name = document.getElementById("roomName" + j).value;
    showError(name.length >= 1, "roomNameError" + j, "invalid Name", "red");

    var price = document.getElementById("roomPrice" + j).value;
    showError(
      price >= 1 && price <= 2000,
      "roomPriceError" + j,
      "Price have to be between 1$ and 2000$",
      "red"
    );

    var size = document.getElementById("roomSize" + j).value;
    showError(size >= 4, "roomSizeError" + j, "size have to be >= 4m²", "red");

    var capacity = document.getElementById("roomCapacity" + j).value;
    showError(
      capacity >= 1 && capacity <= 8,
      "roomCapacityError" + j,
      "Capacity have to be between 1 and 8 persons",
      "red"
    );

    var bed = document.getElementById("roomBed" + j).value;
    showError(
      bed >= 1 && bed <= 4,
      "roomBedError" + j,
      "beds number have to be between 1 and 4 beds",
      "red"
    );

    var description = document.getElementById("roomDescription" + j).value;
    if (
      name.length >= 1 &&
      price >= 1 &&
      price <= 2000 &&
      size >= 4 &&
      capacity >= 1 &&
      capacity <= 8 &&
      bed >= 1 &&
      bed <= 4
    ) {
      //adding every room to the New rooms array without send it to Ls

      roomId += 1;
      var room = {
        id: roomId,
        name: name,
        price: price,
        size: size,
        capacity: capacity,
        bed: bed,
        description: description,
        houseId: houseId,
      };

      roomsTab.push(room);
      comp += 1;
    }
  }
  if (comp == roomsNumber) {
    //adding the rooms to Ls
    localStorage.setItem("rooms", JSON.stringify(roomsTab));
    var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");

    for (let i = 0; i < housesTab.length; i++) {
      if (housesTab[i].id == houseId) {
        housesTab[i].rooms = Number(housesTab[i].rooms) + Number(roomsNumber);
        break;
      }
    }
    localStorage.setItem("houses", JSON.stringify(housesTab));

    location.replace("rooms.html");
  } else {
    alert("Check values");
  }
}

//function that delete object by ID
function deleteObjectByID(id, key) {
  var tab = JSON.parse(localStorage.getItem(key) || "[]");
  for (let i = 0; i < tab.length; i++) {
    if (tab[i].id == id) {
      tab.splice(i, 1);
      break;
    }
  }
  localStorage.setItem(key, JSON.stringify(tab));
}

//function that delete a house
function deleteHouse(id) {
  var roomsTab = JSON.parse(localStorage.getItem("rooms") || "[]");
  for (let i = 0; i < roomsTab.length; i++) {
    if (roomsTab[i].houseId == id) {
      roomsTab.splice(i, 1);
      i = i - 1;
    }
  }
  localStorage.setItem("rooms", JSON.stringify(roomsTab));
  var reservationsTab = JSON.parse(
    localStorage.getItem("reservations") || "[]"
  );
  for (let i = 0; i < reservationsTab.length; i++) {
    if (reservationsTab[i].houseId == id) {
      reservationsTab[i].status = "House is no more available";
    }
  }
  localStorage.setItem("reservations", JSON.stringify(reservationsTab));

  deleteObjectByID(id, "houses");
  location.reload();
}
//function that delete a house
function deleteRoom(id) {
  var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  var room = searchObjectById(id, "rooms");
  for (let i = 0; i < housesTab.length; i++) {
    if (housesTab[i].id == room.houseId) {
      housesTab[i].rooms = Number(housesTab[i].rooms) - 1;
      break;
    }
  }
  localStorage.setItem("houses", JSON.stringify(housesTab));
  var reservationsTab = JSON.parse(
    localStorage.getItem("reservations") || "[]"
  );
  for (let i = 0; i < reservationsTab.length; i++) {
    if (reservationsTab[i].roomId == id) {
      reservationsTab[i].status = "Room is no more available";
    }
  }
  localStorage.setItem("reservations", JSON.stringify(reservationsTab));

  deleteObjectByID(id, "rooms");
  location.reload();
}

//function that check the role of an user and returned
function verifyRole() {
  var connectedUser = localStorage.getItem("connectedUserId");
  var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
  var role;
  for (let i = 0; i < usersTab.length; i++) {
    if (connectedUser == usersTab[i].id) {
      role = usersTab[i].role;
      break;
    }
  }
  return role;
}

// function that navigates to rooms page from houses page
function goToReserveHouseRooms(id) {
  localStorage.setItem("houseId", id);
  location.replace("reserveroom.html");
}

// function that send the id of the room to LS
function sendIdRoom(id) {
  localStorage.setItem("roomId", JSON.stringify(id));
}

//function that display reservation into reservation page

function displayReservation() {
  var roomId = localStorage.getItem("roomId");
  var room = searchObjectById(roomId, "rooms");
  var result = "";
  result += `          <div class="col-lg-8">
  <div class="room-details-item">
    <img src="images/room-details.jpg" alt="" />
    <div class="rd-text">
      <div class="rd-title">
        <h3>${room.name}</h3>
      </div>
      <h2>${room.price}$<span>/Pernight</span></h2>
      <table>
        <tbody>
          <tr>
            <td class="r-o">Size:</td>
            <td>${room.size} m&</td>
          </tr>
          <tr>
            <td class="r-o">Capacity:</td>
            <td>Max ${room.capacity} person(s)</td>
          </tr>
          <tr>
            <td class="r-o">Bed:</td>
            <td>${room.bed} Bed(s)</td>
          </tr>
          <tr>
            <td class="r-o">Services:</td>
            <td>Wifi, Television, Bathroom,...</td>
          </tr>
        </tbody>
      </table>
      <td class="r-o">Description:</td>
      <p class="f-para">
      ${room.description}
      </p>
    </div>
  </div>
  <div class="rd-reviews">
    <h4>Reviews</h4>
    <div class="review-item">
      <div class="ri-pic">
        <img src="images/person_2.jpg" alt="" />
      </div>
      <div class="ri-text">
        <span>27 Aug 2019</span>
        <div class="rating">
 
        </div>
        <h5>Brandon Kelley</h5>
        <p>
          Neque porro qui squam est, qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit, sed quia non numquam eius
          modi tempora. incidunt ut labore et dolore magnam.
        </p>
      </div>
    </div>
    <div class="review-item">
      <div class="ri-pic">
        <img src="images/person_1.jpg" alt="" />
      </div>
      <div class="ri-text">
        <span>27 Aug 2019</span>
    
        <h5>Brandon Kelley</h5>
        <p>
          Neque porro qui squam est, qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit, sed quia non numquam eius
          modi tempora. incidunt ut labore et dolore magnam.
        </p>
      </div>
    </div>
  </div>
</div>
<div class="col-lg-4">
  <div class="room-booking ">
    <h3>Your Reservation</h3>
    <div action="#">
      <div class="check-date">
        <label for="date-in">Check In:</label>
        <input type="text" class="date-input" id="date-in" />
        <span id="checkInErrorId"></span>
        <i class="icon_calendar"></i>
      </div>
      <div class="check-date">
        <label for="date-out">Check Out:</label>
        <input type="text" class="date-input" id="date-out" />
        <span id="checkOutErrorId"></span>
        <i class="icon_calendar"></i>
      </div>
      <div class="check-date">
        <label for="guest">Guests:</label>
        <input type="number" value="0" id="guestNumberId" min="0" max="${room.capacity}"> </input> 
        <span style="font-size:10px" id="guestErrorId"> </span>
      </div>

      <button type="" onclick="reservation()">Booking Now</button>
    </div>
  </div>
</div>          `;
  document.getElementById("reservationId").innerHTML = result;
}

// function that reserve a room
function reservation() {
  var connectedUser = localStorage.getItem("connectedUserId");
  var roomId = localStorage.getItem("roomId");
  var room = searchObjectById(roomId, "rooms");
  var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  for (let i = 0; i < housesTab.length; i++) {
    var room = searchObjectById(roomId, "rooms");
    if (housesTab[i].id == room.houseId) {
      var houseId = housesTab[i].id;
      break;
    }
  }
  var checkIn = document.getElementById("date-in").value;
  showError(checkIn != "", "checkInErrorId", "*", "red");
  var checkOut = document.getElementById("date-out").value;
  showError(checkIn != "", "checkOutErrorId", "*", "red");
  var guests = document.getElementById("guestNumberId").value;
  var msg = "the capacity of this room is " + room.capacity + " person(s)";
  showError(guests > 0 && guests <= room.capacity, "guestErrorId", msg, "red");
  // Save reservation only if all condition are satisfied
  if (checkIn != 0 && checkOut != 0 && guests > 0 && guests <= room.capacity) {
    // Get all reservations from LS
    var reservationsTab = JSON.parse(
      localStorage.getItem("reservations") || "[]"
    );

    var reservation = {
      id: generateId(reservationsTab) + 1,
      checkIn: checkIn,
      checkOut: checkOut,
      guests: guests,
      roomId: roomId,
      houseId: houseId,
      userId: connectedUser,
      status: "Processing",
    };
    if (checkReservation() == true) {
      // save object to LS
      reservationsTab.push(reservation);
      localStorage.setItem("reservations", JSON.stringify(reservationsTab));
      alert("reservation done");
    } else {
      alert("reservation already exist in this period");
    }
  }
}

//function that display the houses of the user in a select menu
function selectHouse() {
  var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  var connectedUser = localStorage.getItem("connectedUserId");
  var user = searchObjectById(connectedUser, "users");
  var result = "";
  result += `<div class="col-md d-flex py-md-4 col-lg-4">
  <div
    class="form-group align-self-stretch d-flex align-items-end"
  >
    <div
      class="wrap align-self-stretch py-3 px-4"
      style="border: 1px solid"
    >
      <label for="#">Choose a house: </label>
      <select   class="form-control" id="elementId" >`;
  for (let i = 0; i < housesTab.length; i++) {
    if (connectedUser == housesTab[i].ownerId) {
      result += `
          <option value="${housesTab[i].id}" >${housesTab[i].name}</option>
    
    
  
  `;
    } else if (user.role == "Admin") {
      result += `
          <option value="${housesTab[i].id}" >${housesTab[i].name}</option>  
  `;
    }
  }
  result += `      </select>
  </div>
</div>
</div>  <div class="col-md d-flex col-lg-4">
<div class="form-group d-flex align-self-stretch">
  <button
    href="#"
    class="btn btn-primary py-5 py-md-3 px-4 align-self-stretch d-block"
    style="height: 70px"
    onclick="displayOwnerReservations()"
  >
    <span>Check Reservations </span>
  </button>
</div>
</div>`;
  document.getElementById("houseSelectId").innerHTML = result;
}

//function that display the reservations of every room of the house for the owner
function displayOwnerReservations() {
  var selectedValue = document.getElementById("elementId").value;
  var houseId = Number(selectedValue);
  var reservationsTab = JSON.parse(
    localStorage.getItem("reservations") || "[]"
  );
  var roomsTab = JSON.parse(localStorage.getItem("rooms") || "[]");
  var house = searchObjectById(houseId, "houses");

  var result = "";
  for (let i = 0; i < roomsTab.length; i++) {
    if (roomsTab[i].houseId == houseId) {
      var comp = 0;
      result += `<div class="mt-5 text-center">Room Name: <span style="font-weight: bold;
      color: #0044cc;text-transform: uppercase;">${roomsTab[i].name}</span></div>`;
      for (let j = 0; j < reservationsTab.length; j++) {
        if (roomsTab[i].id == reservationsTab[j].roomId) {
          comp += 1;
          if (comp == 1) {
            result += `        <div class="row" >
            <table class="table table-hover text-center">
            <thead class="table-primary">
              <tr>
                <th scope="col">Reservation N°:</th>
                <th scope="col">Check In Date</th>
                <th scope="col">Check Out Date</th>
                <th scope="col">Guests Number</th>
                <th scope="col">Contact</th>
                <th scope="col">Status</th>
                <th scope="col" colspan="2"> Actions</th>
                
              </tr>
            </thead><tbody>`;
          }
          var userContact = searchObjectById(
            reservationsTab[j].userId,
            "users"
          ).phone;
          result += `
            <tr>
              <th scope="row">${comp}</th>
              <td>${reservationsTab[j].checkIn}</td>
              <td>${reservationsTab[j].checkOut}</td>
              <td>${reservationsTab[j].guests}</td>
              <td>${userContact}</td>
              <td>${reservationsTab[j].status}</td>
              <td scope="col"><button type="button" class="btn btn-info rounded-pill" onclick="">
              Confirm
            </button></td><td scope="col"><button type="button" class="btn btn-danger rounded-pill"data-toggle="modal"
            data-target="#exampleModal${j}">
              Cancel
            </button></td>
          
            </tr>
            <div
            class="modal fade"
            id="exampleModal${j}"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div
                  class="modal-body"
                  style="color: black; font-size: x-large"
                >
                  Do you really want to Cancel this reservation" ?
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-success"
                    data-dismiss="modal"
                  >
                    Return
                  </button>
                  <button type="button" class="btn btn-danger" onclick="deleteReservation(${reservationsTab[j].id})">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>   
        `;
        }
      }
      result += `</tbody>
      </table>
        </div>`;

      if (comp == 0) {
        result += `<span style="color: red;">No reservations Founded</span>`;
      }
    }
  }

  document.getElementById("showreservationId").innerHTML = result;
}

//function that display the reservations of  the User
function displayUserReservations() {
  var connectedUser = localStorage.getItem("connectedUserId");
  var reservationsTab = JSON.parse(
    localStorage.getItem("reservations") || "[]"
  );

  var comp = 0;
  var result = "";

  for (let i = 0; i < reservationsTab.length; i++) {
    if (reservationsTab[i].userId == connectedUser) {
      comp += 1;
      var room = searchObjectById(reservationsTab[i].roomId, "rooms");
      var house = searchObjectById(room.houseId, "houses");
      if (comp == 1) {
        result += `        <div class="row" >
            <table class="table table-hover text-center">
            <thead class="table-primary">
              <tr>
                <th scope="col">Reservation N°:</th>
                <th scope="col">house Name</th>
                <th scope="col">Room Name</th>
                <th scope="col">Check In Date</th>
                <th scope="col">Check Out Date</th>
                <th scope="col">Guests Number</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead><tbody>`;
      }
      result += `<tr>
          <td scope="col">${comp}</td>
          <td scope="col">${house.name}</td>
          <td scope="col">${room.name}</td>
          <td>${reservationsTab[i].checkIn}</td>
          <td>${reservationsTab[i].checkOut}</td>
          <td>${reservationsTab[i].guests}</td>
          <td scope="col">${room.price}</td>
          <td scope="col">${reservationsTab[i].status}</td>
          <td scope="col"><button type="button" class="btn btn-danger" data-toggle="modal"
          data-target="#exampleModal${i}">
          Cancel
        </button></td>
        </tr>
        <div
        class="modal fade"
        id="exampleModal${i}"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div
              class="modal-body"
              style="color: black; font-size: x-large"
            >
              Do you really want to Cancel this reservation" ?
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
                data-dismiss="modal"
              >
                Return
              </button>
              <button type="button" class="btn btn-danger" onclick="deleteReservation(${reservationsTab[i].id})">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
        `;
    }
  }
  result += `</tbody>
  </table>
    </div>
   `;
  if (comp == 0) {
    result += `<span style="color: red;">No reservations Founded</span>`;
  }

  document.getElementById("showreservationId").innerHTML = result;
}

//function that delete reservation

function deleteReservation(id) {
  deleteObjectByID(id, "reservations");
  location.reload();
}

//function that navigate from search bar in  header to search page
function navigate(evt) {
  if (evt.keyCode == 13) {
    searchValue = document.getElementById("search_input").value;
    localStorage.setItem("search", JSON.stringify(searchValue));
    location.replace("searchpage.html");
  }
}
//function that search a room or a house for an owner (the room or the house searched should be owned by the searcher)
function searchForOwner() {
  var searchName = JSON.parse(localStorage.getItem("search"));
  var connectedUser = localStorage.getItem("connectedUserId");
  var user = searchObjectById(connectedUser, "users");
  var houses = JSON.parse(localStorage.getItem("houses") || "[]");
  var findedHousessTab = [];
  var findedRoomsTab = [];
  var result1 = "";
  var result2 = "";
  var result3 = "";
  for (let i = 0; i < houses.length; i++) {
    if (houses[i].ownerId == user.id) {
      if (houses[i].name.toLowerCase() == searchName.toLowerCase()) {
        findedHousessTab.push(houses[i]);
      }
      var tab = findRooms(houses[i].id);
      for (let j = 0; j < tab.length; j++) {
        if (tab[j].name.toLowerCase() == searchName.toLowerCase()) {
          findedRoomsTab.push(tab[j]);
        }
      }
    }
  }

  if (findedHousessTab.length == 0 && findedRoomsTab.length == 0) {
    result3 = `
  <div class="col-lg-12 text-center">
            <div class="single-product">
              <div class="product-details">
                <h6> "${searchName}" not found</h6>
                </div>
              </div>
            </div>
          </div>`;
  } else {
    result1 += `<div class="row no-gutters justify-content-center mb-5 pb-3">
    <div class="col-md-7 heading-section text-center ftco-animate">
      <span class="subheading">Angels Houses</span>
      <h6> welcome to our houses </h6>
    </div>
  </div>
  <div class="row no-gutters"> `;
    for (let i = 0; i < findedHousessTab.length; i++) {
      result1 += `
        
          <div class="col-lg-6 mb-3">
            <div class="room-wrap d-md-flex ftco-animate">
              <a
                href="#"
                class="img"
                style="background-image: url(images/room-6.jpg)"
              ></a>
              <div class="half left-arrow d-flex align-items-center">
                <div class="text p-sm-2 text-center">
                  <p class="star mb-0">
                    <span class="ion-ios-star"></span
                    ><span class="ion-ios-star"></span
                    ><span class="ion-ios-star"></span
                    ><span class="ion-ios-star"></span
                    ><span class="ion-ios-star"></span>
                  </p>
                  <h3>${findedHousessTab[i].name}</h3>
                  <span class="per">City: ${findedHousessTab[i].city}</span>
                  <span class="per">View: ${findedHousessTab[i].view}</span>
                  <span class="per">Rooms: ${findedHousessTab[i].rooms}</span>
                  <p>
                  <span class="per">Address: ${findedHousessTab[i].address}</span></p>
                  <div style="margin-top: 15px">
                    <p class="pt-1">
                      <a
                        href="#"
                        class="btn-custom btn-custom-view px-3 py-2 rounded"
                        onclick="goToReserveHouseRooms(${findedHousessTab[i].id})"
                        >View Rooms <span class="icon-long-arrow-right"></span
                      ></a>
                    </p>
                    <p class="pt-1">
                      <a
                      href="#"
                        class="btn-custom btn-custom-edit px-3 py-2 rounded"onclick="goToReserveHouseRooms(${findedHousessTab[i].id})"
                        >Check Availability
                        <span class="icon-long-arrow-right"></span
                      ></a>
                    </p>
                    <p class="pt-1" >
                      <a
                      href="contact.html"
                        class="btn-custom btn-custom-delete px-3 py-2 rounded" 
                        >Contact Us <span class="icon-long-arrow-right"></span
                      ></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div> `;
    }
    result2 = `
  <section class="hp-room-section">
    <div class="container">
      <div class="hp-room-items">
        <div class="row" >
   `;
    for (let j = 0; j < findedRoomsTab.length; j++) {
      result2 += `            <div class="col-lg-12  mb-5">
      <div class="hp-room-item set-bg" data-setbg="images/room-b1.jpg">
        <img src="images/room-b2.jpg" alt="" />
        <div class="hr-text">
          <h3>${findedRoomsTab[j].name}</h3>
          <h2>${findedRoomsTab[j].price}$<span>/Pernight</span></h2>
          <table>
            <tbody>
              <tr>
                <td class="r-o">Size:</td>
                <td>${findedRoomsTab[j].size} m²</td>
              </tr>
              <tr>
                <td class="r-o">Capacity:</td>
                <td>Max ${findedRoomsTab[j].capacity} person(s)</td>
              </tr>
              <tr>
                <td class="r-o">Bed:</td>
                <td>${findedRoomsTab[j].bed} Bed(s)</td>
              </tr>
              <tr>
                <td class="r-o">Services:</td>
                <td>Wifi, Television, Bathroom,...</td>
              </tr>
            </tbody>
          </table>
          <a  href="#" class="primary-btn-sona" style="width:50%" onclick="" >More details</a>
        </div>
      </div>
    </div>     `;
    }
    result2 += `</div>
    </div>
    </div>
    </section>`;
    result3 = result1 + result2;
  }
  document.getElementById("searchId").innerHTML = result3;
}

//function that search a room or a house
function searchForHouseOrRoom() {
  var searchName = JSON.parse(localStorage.getItem("search"));
  var houses = JSON.parse(localStorage.getItem("houses") || "[]");
  var findedHousessTab = [];
  var findedRoomsTab = [];
  var result1 = "";
  var result2 = "";
  var result3 = "";
  for (let i = 0; i < houses.length; i++) {
    if (houses[i].name.toLowerCase() == searchName.toLowerCase()) {
      findedHousessTab.push(houses[i]);
    }
    var tab = findRooms(houses[i].id);
    for (let j = 0; j < tab.length; j++) {
      if (tab[j].name.toLowerCase() == searchName.toLowerCase()) {
        findedRoomsTab.push(tab[j]);
      }
    }
  }

  if (findedHousessTab.length == 0 && findedRoomsTab.length == 0) {
    result3 = `
  <div class="col-lg-12 text-center">
            <div class="single-product">
              <div class="product-details">
                <h6> "${searchName}" not found</h6>
                </div>
              </div>
            </div>
          </div>`;
  } else {
    result1 += `<div class="row no-gutters justify-content-center mb-5 pb-3">
    <div class="col-md-7 heading-section text-center ftco-animate">
      <span class="subheading">Angels Houses</span>
      <h6> welcome to our houses </h6>
    </div>
  </div>
  <div class="row no-gutters"> `;
    for (let i = 0; i < findedHousessTab.length; i++) {
      result1 += `
        
          <div class="col-lg-6 mb-3">
            <div class="room-wrap d-md-flex ftco-animate">
              <a
                href="#"
                class="img"
                style="background-image: url(images/room-6.jpg)"
              ></a>
              <div class="half left-arrow d-flex align-items-center">
                <div class="text p-sm-2 text-center">
                  <p class="star mb-0">
                    <span class="ion-ios-star"></span
                    ><span class="ion-ios-star"></span
                    ><span class="ion-ios-star"></span
                    ><span class="ion-ios-star"></span
                    ><span class="ion-ios-star"></span>
                  </p>
                  <h3>${findedHousessTab[i].name}</h3>
                  <span class="per">City: ${findedHousessTab[i].city}</span>
                  <span class="per">View: ${findedHousessTab[i].view}</span>
                  <span class="per">Rooms: ${findedHousessTab[i].rooms}</span>
                  <p>
                  <span class="per">Address: ${findedHousessTab[i].address}</span></p>
                  <div style="margin-top: 15px">
                    <p class="pt-1">
                      <a
                        href="#"
                        class="btn-custom btn-custom-view px-3 py-2 rounded"
                        onclick="goToReserveHouseRooms(${findedHousessTab[i].id})"
                        >View Rooms <span class="icon-long-arrow-right"></span
                      ></a>
                    </p>
                    <p class="pt-1">
                      <a
                      href="#"
                        class="btn-custom btn-custom-edit px-3 py-2 rounded"onclick="goToReserveHouseRooms(${findedHousessTab[i].id})"
                        >Check Availability
                        <span class="icon-long-arrow-right"></span
                      ></a>
                    </p>
                    <p class="pt-1" >
                      <a
                      href="contact.html"
                        class="btn-custom btn-custom-delete px-3 py-2 rounded" 
                        >Contact Us <span class="icon-long-arrow-right"></span
                      ></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div> `;
    }
    result2 = `
  <section class="hp-room-section">
    <div class="container">
      <div class="hp-room-items">
        <div class="row" >
   `;
    for (let j = 0; j < findedRoomsTab.length; j++) {
      result2 += `            <div class="col-lg-12  mb-5">
      <div class="hp-room-item set-bg" data-setbg="images/room-b1.jpg">
        <img src="images/room-b2.jpg" alt="" />
        <div class="hr-text">
          <h3>${findedRoomsTab[j].name}</h3>
          <h2>${findedRoomsTab[j].price}$<span>/Pernight</span></h2>
          <table>
            <tbody>
              <tr>
                <td class="r-o">Size:</td>
                <td>${findedRoomsTab[j].size} m²</td>
              </tr>
              <tr>
                <td class="r-o">Capacity:</td>
                <td>Max ${findedRoomsTab[j].capacity} person(s)</td>
              </tr>
              <tr>
                <td class="r-o">Bed:</td>
                <td>${findedRoomsTab[j].bed} Bed(s)</td>
              </tr>
              <tr>
                <td class="r-o">Services:</td>
                <td>Wifi, Television, Bathroom,...</td>
              </tr>
            </tbody>
          </table>
          <a  href="#" class="primary-btn-sona" style="width:50%" onclick="" >More details</a>
        </div>
      </div>
    </div>     `;
    }
    result2 += `</div>
    </div>
    </div>
    </section>`;
    result3 = result1 + result2;
  }
  document.getElementById("searchId").innerHTML = result3;
}

//function that display the search from search bar
function displaySearch() {
  var connectedUser = localStorage.getItem("connectedUserId");
  var user = searchObjectById(connectedUser, "users");
  if (user.role == "Owner") {
    searchForOwner();
  } else {
    searchForHouseOrRoom();
  }
}
//function that display all users for the admin
function displayUsers() {
  var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
  var result = "";
  var comp = 0;
  for (let i = 0; i < usersTab.length; i++) {
    result += `        <tr>
    <td scope="col">${i + 1}</td>
    <td scope="col">${usersTab[i].firstName}</td>
    <td scope="col">${usersTab[i].lastName}</td>
    <td>${usersTab[i].email}</td>
    <td>${usersTab[i].phone}</td>
    <td>${usersTab[i].role}</td>
    <td scope="col">
      <button
        type="button"
        class="btn btn-success rounded-pill"style="width:80px"onclick="goToDisplayProfile(${
          usersTab[i].id
        })"

      >
        Display
      </button>
      <button
        type="button"
        class="btn btn-warning rounded-pill" style="width:80px" onclick="editUser(${
          usersTab[i].id
        })"

      >
        Edit
      </button>
      <button
        type="button"
        class="btn btn-danger rounded-pill "style="width:80px"
        data-toggle="modal"
        data-target="#exampleModal${i}"
      >
        Delete
      </button>
    </td>
  </tr>
  <tr id="editUserId${i}"></tr>
  <div
    class="modal fade"
    id="exampleModal${i}"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div
          class="modal-body"
          style="color: black; font-size: x-large"
        >
          Do you really want to Delete <span style="color: blue;"> "${
            usersTab[i].firstName
          } ${usersTab[i].lastName}"</span> ?
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-success"
            data-dismiss="modal"
          >
            Return
          </button>
          <button
            type="button"
            class="btn btn-danger"
           onclick="deleteUser(${usersTab[i].id})"
          >
            Delete
          </button>

        </div>
      </div>
    </div>
  </div>
`;
  }
  document.getElementById("displayUsersId").innerHTML = result;
}
//function that display edit User menu
function editUser(id) {
  var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
  var result = "";
  var index;
  for (let i = 0; i < usersTab.length; i++) {
    if (usersTab[i].id == id) {
      result += `
<td> </td>
  <td><input class="editInput" type="text" style="width: 130px; color:green;" required id="newFirstName${i}" value="${usersTab[i].firstName}"/>  
  <span id="newHouseNameError"></span>
 </td>
 <td><input class="editInput" type="text" style="width: 130px;color:green;" required id="newLastName${i}" value="${usersTab[i].lastName}"/>  
  <span id="newHouseNameError"></span>
 </td>
 <td><input class="editInput" type="text" style="width: 130px;color:green;" required id="newEmail${i}" value="${usersTab[i].email}"/>  
  <span id="newHouseNameError"></span>
 </td>
 <td>  <button
 type="button"
 class="btn btn-info rounded-pill"style="width:80px" onclick="updateUser(${usersTab[i].id})"

>
 Update
</button></td>

`;
      index = i;
    }
  }
  console.log(index);
  document.getElementById("editUserId" + index).innerHTML = result;
}
//function that update the user info
function updateUser(id) {
  var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
  for (let i = 0; i < usersTab.length; i++) {
    if (usersTab[i].id == id) {
      var newFirstName = document.getElementById("newFirstName" + i).value;
      var newLastName = document.getElementById("newLastName" + i).value;
      var newEmail = document.getElementById("newEmail" + i).value;
      usersTab[i].firstName = newFirstName;
      usersTab[i].lastName = newLastName;
      usersTab[i].email = newEmail;
      break;
    }
  }
  localStorage.setItem("users", JSON.stringify(usersTab));
  location.reload();
}

//function that delete a user (owner/client) and delete all his data (houses, reservations)

function deleteUser(id) {
  var user = searchObjectById(id, "users");
  var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  var reservationsTab = JSON.parse(
    localStorage.getItem("reservations") || "[]"
  );
  if (user.role == "Owner") {
    for (let i = 0; i < housesTab.length; i++) {
      if (housesTab[i].ownerId == id) {
        deleteHouse(housesTab[i].id);
      }
    }
  }

  if (user.role == "Client") {
    for (let i = 0; i < reservationsTab.length; i++) {
      if (reservationsTab[i].userId == id) {
        deleteObjectByID(reservationsTab[i].id, "reservations");
      }
    }
  }
  deleteObjectByID(user.id, "users");
}

//function that display header dynamiquement
function generateHeader() {
  var header = "";
  var iduser = localStorage.getItem("connectedUserId" || "[]");
  var user = searchObjectById(iduser, "users");
  if (user.role == "Admin") {
    header = `<ul class="navbar-nav">
    <li class="nav-item active">
      <a href="index.html" class="nav-link">Home</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">Welcome <span style="color: #802000;text-transform: uppercase;" onclick="goToDisplayProfile(${user.id})">~${user.firstName}~</span></a>
    </li>
    <li class="nav-item active dropdown">
    <a href="#" class="nav-link dropdown-toggle"
      >Dashboard</a
    >
    <ul class="dropdown-menu" style="width: fit-content">
      <li><a class="dropdown-item" href="displayallusers.html">Display all Users</a></li>
      <li><a class="dropdown-item" href="showOwnerreservations.html">Display all Reservations</a></li>
      <li>
        <a
          class="dropdown-item"
          href="houses.html"
          onclick=""
          >Our Houses</a
        >
      </li>
    </ul>
  </li>

    <li class="nav-item searchBar">
      <div action="#" class="search-form">
        <div class="form-group">
          <span class="icon ion-ios-search"></span>
          <input
            type="text"
            class="form-control"
            placeholder="Search..."
            onkeypress="navigate(event)"
            id="search_input"
          />
        </div>
      </div>
    </li>
    <li class="nav-item">
    <a href="#" class="nav-link" onclick="logOut()">LogOut</a>
  </li>
  </ul>`;
  } else if (user.role == "Client") {
    header = `<ul class="navbar-nav">
    <li class="nav-item active">
      <a href="index.html" class="nav-link">Home</a>
    </li>
    <li class="nav-item">
      <a href="#" class="nav-link">Welcome <span style="color: #802000;text-transform: uppercase;"onclick="goToDisplayProfile(${user.id})">~${user.firstName}~</span></a>
    </li>
    <li class="nav-item">
      <a href="houses.html" class="nav-link">Our Houses</a>
    </li>
    <li class="nav-item">
      <a href="showuserreservations.html" class="nav-link">My Reservation</a>
    </li>
 
    <li class="nav-item searchBar">
      <div action="#" class="search-form">
        <div class="form-group">
          <span class="icon ion-ios-search"></span>
          <input
            type="text"
            class="form-control"
            placeholder="Search..."
            onkeypress="navigate(event)"
            id="search_input"
          />
        </div>
      </div>
    </li>
    <li class="nav-item">
    <a href="#" class="nav-link"onclick="logOut()">LogOut</a>
  </li>
  </ul>`;
  } else {
    header = `<ul class="navbar-nav">
    <li class="nav-item active">
      <a href="index.html" class="nav-link">Home</a>
    </li>
    <li class="nav-item">
    <a href="#" class="nav-link">Welcome <span style="color: #802000;text-transform: uppercase;"onclick="goToDisplayProfile(${user.id})">~${user.firstName}~</span></a>
  </li>
    <li class="nav-item active dropdown">
    <a href="#" class="nav-link dropdown-toggle"
      >Dashboard</a
    >
    <ul class="dropdown-menu" style="width: fit-content">
      <li><a class="dropdown-item" href="houses.html">My Houses</a></li>
      <li><a class="dropdown-item" href="showOwnerreservations.html">My Reservation</a></li>
      <li>
        <a
          class="dropdown-item"
          href="#"
          onclick="houseAddingRestriction()"
          >Add New House</a
        >
      </li>
    </ul>
  </li>

    <li class="nav-item searchBar">
      <div action="#" class="search-form">
        <div class="form-group ">
          <span class="icon ion-ios-search"></span>
          <input
            type="text"
            class="form-control"
            placeholder="Search..."
            onkeypress="navigate(event)"
            id="search_input"
          />
        </div>
      </div>
    </li>
    <li class="nav-item">
    <a href="#" class="nav-link"onclick="logOut()">LogOut</a>
  </li>
  </ul>`;
  }

  document.getElementById("ftco-nav").innerHTML = header;
}

function logOut() {
  localStorage.removeItem("connectedUserId");
  location.replace("login.html");
}

//function that search all rooms of a house by house Id
function findRooms(id) {
  var roomsTab = JSON.parse(localStorage.getItem("rooms") || "[]");
  var findedRoomsTab = [];
  for (let i = 0; i < roomsTab.length; i++) {
    if (roomsTab[i].houseId == id) {
      findedRoomsTab.push(roomsTab[i]);
    }
  }
  return findedRoomsTab;
}

//function that validate a house
function validateHouse(id) {
  var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  for (let i = 0; i < housesTab.length; i++) {
    if (housesTab[i].id == id) {
      housesTab[i].status = "Confirmed";
      break;
    }
  }
  localStorage.setItem("houses", JSON.stringify(housesTab));
  alert("house has been validate");
}

//function that check if it is possible to book a room in a exact period
function checkReservation() {
  var roomId = localStorage.getItem("roomId");
  var result = true;
  var dates = [];
  var dateFrom = document.getElementById("date-in").value;

  var dateTo = document.getElementById("date-out").value;

  var d1 = dateFrom.split("/");
  var d2 = dateTo.split("/");

  var from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]); // -1 because months are from 0 to 11
  var to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
  var reservationsTab = JSON.parse(
    localStorage.getItem("reservations") || "[]"
  );
  for (let j = 0; j < reservationsTab.length; j++) {
    if (reservationsTab[j].roomId == roomId) {
      dates.push(reservationsTab[j].checkIn);
      dates.push(reservationsTab[j].checkOut);
    }
  }

  for (let i = 0; i < dates.length; i++) {
    let parts = dates[i].split("/");
    let date = new Date(parts[2], parseInt(parts[1]) - 1, parts[0]);
    if (date >= from && date <= to) {
      console.log("dates in range", date);
      result = false;
    }
  }
  return result;
}

//Function that display User profile info in page profile
function goToDisplayProfile(id) {
  localStorage.setItem("userId", id);
  location.replace("profile.html");
}

//function that display the profile of the a user according to admin choice
function userProfile() {
  var id = JSON.parse(localStorage.getItem("userId"));
  var user = searchObjectById(id, "users");
  var result = `<section class="vh-100 col-lg-12" style="background-color: #f4f5f7">
  <div class="container py-5 h-100">
    <div
      class="row d-flex justify-content-center align-items-center h-100 col-lg-12"
    >
      <div class="col-lg-12 mb-4 mb-lg-0">
        <div class="card mb-3" style="border-radius: 0.5rem">
          <div class="row g-0">
            <div
              class="col-md-4 gradient-custom text-center text-white"
              style="
                border-top-left-radius: 0.5rem;
                border-bottom-left-radius: 0.5rem;
              "
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="Avatar"
                class="img-fluid my-5"
                style="width: 80px"
              />
              <h5>User ID :</h5>
              <p class="text-muted">${user.id}</p>
            </div>
            <div class="col-md-8">
              <div class="card-body p-4 text-center">
                <h6 class="text-center">Information</h6>
                <hr class="mt-0 mb-4" />
                <div class="row pt-1">
                  <div class="col-6 mb-3">
                    <h6>First Name</h6>
                    <input  value="${user.firstName}" id="newFirstName"></input>
                    <span id="newFirstNameError"></span>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Last Name</h6>
                    <input  value="${user.lastName}" id="newLastName"></input>
                    <span id="newLastNameError"></span>
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Email</h6>
                    <input readonly value="${user.email}" id="newEmail"></input>
                    <span id="newEmailError"></span> 
                  </div>
                  <div class="col-6 mb-3">
                    <h6>Phone</h6>
                    <input  value="${user.phone}"id="newPhone"></input>
                    <span id="newPhoneError"></span> 

                  </div>
                  <div class="col-6 mb-3">
                    <h6>Password</h6>
                    <input value="${user.password}" id="newPWD"></input>
                    <span id="newPwdError"></span> 
                  </div>
                  <div class="col-md-12 ">
                  <button  class="primary-btn" onclick="updateProfile(${user.id})">Update Profile</button>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></section>`;
  document.getElementById("userProfile").innerHTML = result;
}

//function that update profile from profile page
function updateProfile(id) {
  var newFirstName = document.getElementById("newFirstName").value;
  showError(
    newFirstName.length > 2,
    "newFirstNameError",
    "First Name must have at least 3 chars",
    "red"
  );
  var newLastName = document.getElementById("newLastName").value;
  showError(
    newLastName.length > 2,
    "newLastNameError",
    "last Name must have at least 3 chars",
    "red"
  );

  var newtel = document.getElementById("newPhone").value;
  showError(newtel.length == 8, "newPhoneError", "wrong number", "red");
  var newPwd = document.getElementById("newPWD").value;
  showError(
    newPwd.length >= 6 && newPwd.length <= 12,
    "newPwdError",
    "Pwd must have between 6 and 12 chars",
    "red"
  );
  if (
    newFirstName.length > 2 &&
    newLastName.length > 2 &&
    verifEmail(newEmail) == false &&
    newPwd.length >= 6 &&
    newPwd.length <= 12 &&
    newtel.length == 8
  ) {
    var userid = id;
    var users = JSON.parse(localStorage.getItem("users") || "[]");
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == userid) {
        users[i].firstName = newFirstName;
        users[i].lastName = newLastName;
        users[i].password = newPwd;
        users[i].phone = newtel;
        break;
      }
    }
    localStorage.setItem("users", JSON.stringify(users));
    location.reload();
  }
}

//function that calculate the number of days between two dates
function numberOfDays(id) {
  var reservation = searchObjectById(id, "reservations");
  console.log(reservation);

  var date1 = reservation.checkIn;
  var date2 = reservation.checkOut;
  var d1 = date1.split("/");
  var d2 = date2.split("/");

  var from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]); // -1 because months are from 0 to 11
  var to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);

  // To calculate the time difference of two dates
  var Difference_In_Time = to.getTime() - from.getTime();

  // To calculate the no. of days between two dates
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24) + 1;

  //To display the final no. of days (result)
  console.log(
    "Total number of days between dates  <br>" +
      date1 +
      "<br> and <br>" +
      date2 +
      " is: <br> " +
      Difference_In_Days
  );
}
//---------------------*******other function*******---------------------------------------------

// function aaa(params) {
//   var dateFrom = "31/06/2013";
//   var dateTo = "05/07/2013";

//   var d1 = dateFrom.split("/");
//   var d2 = dateTo.split("/");

//   var from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]); // -1 because months are from 0 to 11
//   var to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);

//   var dates = [
//     "02/06/2013",
//     "02/07/2013",
//     "02/08/2013",
//     "02/09/2013",

//     "02/10/2013",
//     "03/06/2013",
//   ];
//   for (let i = 0; i < dates.length; i++) {
//     let parts = dates[i].split("/");
//     let date = new Date(parts[2], parseInt(parts[1]) - 1, parts[0]);
//     if (date >= from && date < to) {
//       console.log("dates in range", date);
//     }
//   }
// }

// function that add a house into LS
// function addHouse() {
//   var name = document.getElementById("houseName").value;
//   showError(name.length > 1, "houseNameError", "Name Invalid", "red");
//   var address = document.getElementById("houseAddress").value;
//   showError(address.length > 4, "houseAddressError", "Address Invalid", "red");
//   var view = document.getElementById("houseView").value;
//   showError(view.length > 2, "houseViewError", "house View Invalid", "red");
//   var city = document.getElementById("houseCity").value;
//   showError(city.length > 2, "houseCityError", "City Invalid", "red");
//   var rooms = document.getElementById("houseRooms").value;
//   showError(
//     rooms >= 1 && rooms <= 10,
//     "houseRoomsError",
//     "Rooms number have to be between 1 and 10 rooms",
//     "red"
//   );

//   if (
//     name.length > 1 &&
//     address.length > 4 &&
//     view.length > 2 &&
//     city.length > 2 &&
//     rooms >= 1 &&
//     rooms <= 10
//   ) {
//     var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
//     var connectedUser = localStorage.getItem("connectedUserId");
//     var house = {
//       id: generateId(housesTab) + 1,
//       name: name,
//       address: address,
//       view: view,
//       city: city,
//       rooms: rooms,
//       status: "Not Confirmed",
//       ownerId: connectedUser,
//     };

//     housesTab.push(house);
//     localStorage.setItem("houses", JSON.stringify(housesTab));
//   } else {
//     alert("Check values");
//   }
// }

// function Modal(id, msg, functionName, sendId) {
//   var result = `
//   <div class="modal fade" id=${id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//     <div class="modal-dialog">
//       <div class="modal-content">
//         <div class="modal-body">
//         ${msg}
//         </div>
//         <div class="modal-footer">
//           <button type="button" class="btn btn-secondary" data-dismiss="modal">Return</button>
//           <button type="button" class="btn btn-primary" onclick="${functionName}">Confirm</button>
//         </div>
//       </div>
//     </div>
//   </div>`;
//   document.getElementById(sendId).innerHTML = result;
// }

//function that display add rooms page
// function displayRooms() {
//   console.log("display done");
//   // var roomsNumber = document.getElementById("houseRooms").value;
//   var iid = localStorage.getItem("houseInProgress");
//   var house = searchObjectById(iid, "houses");
//   var roomsNumber = house.rooms;
//   console.log(roomsNumber);
//   var result = "";
//   for (let i = 0; i < roomsNumber; i++) {
//     result += `         <div class="col-lg-4 col-md-6">
//    <div class="room-item">
//      <p class="star mb-0 text-center">
//        <span class="ion-ios-star"> Room N°${i + 1}</span>
//      </p>
//      <img src="images/add-room.jpg" alt="" class="img-fluid" />
//      <div class="ri-text">
//        <table>
//          <tbody>
//            <tr>
//              <td>
//                <div class="groupRooms">
//                  <input type="text" required id="roomName${i}"/>
//                  <span class="highlight"></span>
//                  <span class="bar"></span>
//                  <label>Name:</label>
//                  <span id="roomNameError${i}"></span>
//                </div>
//              </td>
//            </tr>
//            <tr>
//              <td>
//                <div class="groupRooms">
//                  <input type="text" required id="roomPrice${i}"/>
//                  <span class="highlight"></span>
//                  <span class="bar"></span>
//                  <label>Price:$/Pernight</label>
//                  <span id="roomPriceError${i}"></span>

//                </div>
//              </td>
//            </tr>
//            <tr>
//              <td>
//                <div class="groupRooms">
//                  <input type="text" required id="roomSize${i}"/>
//                  <span class="highlight"></span>
//                  <span class="bar"></span>
//                  <label>Size:</label>
//                  <span id="roomSizeError${i}"></span>

//                </div>
//              </td>
//            </tr>
//            <tr>
//              <td>
//                <div class="groupRooms">
//                  <input type="number" required id="roomCapacity${i}"/>
//                  <span class="highlight"></span>
//                  <span class="bar"></span>
//                  <label>Capacity:</label>
//                  <span id="roomCapacityError${i}"></span>

//                </div>
//              </td>
//            </tr>
//            <tr>
//              <td>
//                <div class="groupRooms">
//                  <input type="number" required id="roomBed${i}"/>
//                  <span class="highlight"></span>
//                  <span class="bar"></span>
//                  <label>Bed:</label>
//                  <span id="roomBedError${i}"></span>

//                </div>
//              </td>
//            </tr>
//            <tr>
//              <td>
//                <div class="groupRooms">
//                  <input type="text" required id="roomDescription${i}"/>
//                  <span class="highlight"></span>
//                  <span class="bar"></span>
//                  <label>Description:</label>
//                  <span id="roomDescriptionError${i}"></span>

//                </div>
//              </td>
//            </tr>
//          </tbody>
//        </table>
//      </div>
//    </div>
//  </div>
//  `;
//   }

//   document.getElementById("displayRoomsId").innerHTML = result;
// }

// function that add a house into LS
// function addHouse() {
//   var name = document.getElementById("houseName").value;
//   showError(name.length > 1, "houseNameError", "Name Invalid", "red");
//   var address = document.getElementById("houseAddress").value;
//   showError(address.length > 4, "houseAddressError", "Address Invalid", "red");
//   var view = document.getElementById("houseView").value;
//   showError(view.length > 2, "houseViewError", "house View Invalid", "red");
//   var city = document.getElementById("houseCity").value;
//   showError(city.length > 2, "houseCityError", "City Invalid", "red");
//   var rooms = document.getElementById("houseRooms").value;
//   showError(
//     rooms >= 1 && rooms <= 10,
//     "houseRoomsError",
//     "Rooms number have to be between 1 and 10 rooms",
//     "red"
//   );

//   if (
//     name.length > 1 &&
//     address.length > 4 &&
//     view.length > 2 &&
//     city.length > 2 &&
//     rooms >= 1 &&
//     rooms <= 10
//   ) {
//     var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
//     var connectedUser = localStorage.getItem("connectedUserId");
//     var id = generateId(housesTab) + 1;
//     var house = {
//       id: id,
//       name: name,
//       address: address,
//       view: view,
//       city: city,
//       rooms: rooms,
//       status: "Not Confirmed",
//       ownerId: connectedUser,
//     };

//     housesTab.push(house);
//     localStorage.setItem("houseInProgress", JSON.stringify(id));
//     nextAndPrevious();
//     localStorage.setItem("houses", JSON.stringify(housesTab));

//     // location.replace("addrooms.html");
//   } else {
//     alert("Check values");
//   }
// }
