/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
const users = [
  {
    name: "Wahyu Adi Pramudya",
    age: 21,
    major: "Electro",
  },
  {
    name: "Muhammad Al Hafizh",
    age: 20,
    major: "Informatics",
  },
  {
    name: "Azil Khaq",
    age: 21,
    major: "Informatics",
  },
  {
    name: "Muhammad Nasoha M.",
    age: 20,
    major: "Informatics",
  },
  {
    name: "Aufa Billah",
    age: 22,
    major: "Informatics",
  }
];

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
const all = () => {
  for (const key in users) {
    console.log(`${key}: ${users[key]}`);
  }
}

/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
const store = (data) => {
  users.push(data)
}

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
const update = (index, data) => {
  users[index] = data;
}

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
const destroy = (index) => {
  users.splice(index,1);
}

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);

  /**
   * Test function update
   */
  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);

  /**
   * Test function destroy
   */
  console.log("# Delete User: Azil");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
