// // const express = require('express');
// // const app = express();
// // const port = process.env.PORT || 5001;
// // const cors = require('cors');


// // //mongodb password 


// // //UZTCnITHdQYoHk45

// // // middleware
// // app.use(cors());
// // app.use(express.json());


// // app.use(cors({
// //   origin: 'http://localhost:5173', // or 3000, depending on your React port
// //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
// //   credentials: true
// // }));



// // const { MongoClient, ServerApiVersion ,ObjectId} = require('mongodb');
// // const uri = "mongodb+srv://mern-book-store:UZTCnITHdQYoHk45@cluster0.mqxe7uu.mongodb.net/?appName=Cluster0";

// // // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// // const client = new MongoClient(uri, {
// //   serverApi: {
// //     version: ServerApiVersion.v1,
// //     strict: true,
// //     deprecationErrors: true,
// //   }
// // });
// // async function run() {
// //   try {
// //     await client.connect();

// //     const bookcollections = client.db("BookInventory").collection("books");

// //     // default route
// //     app.get('/', (req, res) => {
// //       res.send('Hello World! Ujjwal Pandey');
// //     });

// //     // insert a book
// //     app.post("/upload-book", async (req, res) => {
// //       const data = req.body;
// //       const result = await bookcollections.insertOne(data);
// //       res.send(result);
// //     });


// //     // get all books
// //     app.get("/all-books", async (req, res) => {
// //       const query = req.query?.category ? { category: req.query.category } : {};
// //       const result = await bookcollections.find(query).toArray();
// //       res.send(result);
// //     });

// //     // update a book
// //     app.patch("/book/:id", async (req, res) => {
// //       const id = req.params.id;
// //       const updateBookdata = req.body;
// //       const filter = { _id: new ObjectId(id) };
// //       const options = { upsert: true };
// //       const updateDoc = { $set: { ...updateBookdata } };
// //       const result = await bookcollections.updateOne(filter, updateDoc, options);
// //       res.send(result);
// //     });

// //     // delete a book
// //     app.delete("/book/:id", async (req, res) => {
// //       const id = req.params.id;
// //       const filter = { _id: new ObjectId(id) };
// //       const result = await bookcollections.deleteOne(filter);
// //       res.send(result);
// //     });

// //     // get single book
// //     app.get("/book/:id", async (req, res) => {
// //       const id = req.params.id;
// //       const filter = { _id: new ObjectId(id) };
// //       const result = await bookcollections.findOne(filter);
// //       res.send(result);
// //     });

// //     await client.db("admin").command({ ping: 1 });
// //     console.log("Pinged your deployment. You successfully connected to MongoDB!");

// //   } finally {
// //     //await client.close();
// //   }
// // }

// // run().catch(console.dir);

// // // ✅ Only ONE app.listen here
// // app.listen(port, () => {
// //   console.log(`✅ Server is running on http://localhost:${port}`);
// // });




// const express = require("express");
// const cors = require("cors");
// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// const app = express();
// const port = process.env.PORT || 5001;

// // ✅ Enable CORS once — for your frontend
// app.use(cors({
//   origin: "http://localhost:5173",  // change if your frontend runs on another port
//   methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
// }));
// app.use(express.json());

// // ✅ MongoDB configuration
// const uri = "mongodb+srv://mern-book-store:UZTCnITHdQYoHk45@cluster0.mqxe7uu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     await client.connect();
//     console.log("✅ Connected to MongoDB successfully");

//     const bookCollection = client.db("BookInventory").collection("books");

//     // ✅ Default route
//     app.get("/", (req, res) => {
//       res.send("Hello World! Ujjwal Pandey Backend is running ✅");
//     });

//     // ✅ Upload book
//     app.post("/upload-book", async (req, res) => {
//       const data = req.body;
//       const result = await bookCollection.insertOne(data);
//       res.send(result);
//     });

//     // ✅ Get all books
//     app.get("/all-books", async (req, res) => {
//       const query = req.query?.category ? { category: req.query.category } : {};
//       const result = await bookCollection.find(query).toArray();
//       res.send(result);
//     });

//     // ✅ Update book
//     app.patch("/book/:id", async (req, res) => {
//       const id = req.params.id;
//       const updateBook = req.body;
//       const filter = { _id: new ObjectId(id) };
//       const updateDoc = { $set: updateBook };
//       const result = await bookCollection.updateOne(filter, updateDoc);
//       res.send(result);
//     });

//     // ✅ Delete book
//     app.delete("/book/:id", async (req, res) => {
//       const id = req.params.id;
//       const filter = { _id: new ObjectId(id) };
//       const result = await bookCollection.deleteOne(filter);
//       res.send(result);
//     });

//     // ✅ Get single book
//     app.get("/book/:id", async (req, res) => {
//       const id = req.params.id;
//       const filter = { _id: new ObjectId(id) };
//       const result = await bookCollection.findOne(filter);
//       res.send(result);
//     });

//     // ✅ Start server AFTER successful DB connection
//     app.listen(port, () => {
//       console.log(`🚀 Server running on http://localhost:${port}`);
//     });

//   } catch (err) {
//     console.error("❌ MongoDB connection error:", err);
//   }
// }

// run().catch(console.dir);





//type2




// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// const Razorpay = require("razorpay");
// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// const app = express();
// const port = process.env.PORT || 5001;

// //✅ Enable CORS for frontend (React)
// app.use(cors({
//   origin: "http://localhost:5173",  // change if React runs on different port
//   methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
// }));
// app.use(express.json());

// // ✅ MongoDB configuration
// const uri = "mongodb+srv://mern-book-store:UZTCnITHdQYoHk45@cluster0.mqxe7uu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// // ✅ Razorpay Setup
// // const razorpay = new Razorpay({
// //   key_id: "YOUR_RAZORPAY_KEY_ID", // replace with your key
// //   key_secret: "YOUR_RAZORPAY_SECRET", // replace with your secret
// // });

// async function run() {
//   try {
//     await client.connect();
//     console.log("✅ Connected to MongoDB successfully");

//     const bookCollection = client.db("BookInventory").collection("books");
//     const orderCollection = client.db("BookInventory").collection("orders");

//     // ✅ Default route
//     app.get("/", (req, res) => {
//       res.send("📚 Book Store Backend is running — by Ujjwal Pandey ✅");
//     });

//     // ✅ Upload book
//     app.post("/upload-book", async (req, res) => {
//       const data = req.body;
//       const result = await bookCollection.insertOne(data);
//       res.send(result);
//     });

//     // ✅ Get all books
//     app.get("/all-books", async (req, res) => {
//       const query = req.query?.category ? { category: req.query.category } : {};
//       const result = await bookCollection.find(query).toArray();
//       res.send(result);
//     });

//     // ✅ Update book
//     app.patch("/book/:id", async (req, res) => {
//       const id = req.params.id;
//       const updateBook = req.body;
//       const filter = { _id: new ObjectId(id) };
//       const updateDoc = { $set: updateBook };
//       const result = await bookCollection.updateOne(filter, updateDoc);
//       res.send(result);
//     });

//     // ✅ Delete book
//     app.delete("/book/:id", async (req, res) => {
//       const id = req.params.id;
//       const filter = { _id: new ObjectId(id) };
//       const result = await bookCollection.deleteOne(filter);
//       res.send(result);
//     });

//     // ✅ Get single book
//     app.get("/book/:id", async (req, res) => {
//       const id = req.params.id;
//       const filter = { _id: new ObjectId(id) };
//       const result = await bookCollection.findOne(filter);
//       res.send(result);
//     });

  

//     // ✅ Place Order API (Cash or UPI)
//     app.post("/api/orders", async (req, res) => {
//       const order = req.body;
//       if (!order.user || !order.bookId || !order.paymentMethod) {
//         return res.status(400).send({ message: "Missing order details" });
//       }

//       const result = await orderCollection.insertOne(order);

//       // ✅ Send confirmation email via Nodemailer
//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: "yourgmail@gmail.com", // your email
//           pass: "your-app-password",   // your app password from Gmail
//         },
//       });

//       const mailOptions = {
//         from: "yourgmail@gmail.com",
//         to: order.user.email,
//         subject: "📘 Order Confirmation - Book Store",
//         html: `
//           <h3>Hello ${order.user.name},</h3>
//           <p>Your order for <b>${order.bookTitle}</b> has been placed successfully.</p>
//           <p>Payment Method: ${order.paymentMethod}</p>
//           <p>Status: ${order.status}</p>
//           <p>Shipping Address: ${order.user.address}</p>
//           <br/>
//           <p>Thank you for shopping with us! 📚</p>
//         `,
//       };

//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) console.error("❌ Email error:", error);
//         else console.log("📧 Email sent:", info.response);
//       });

//       res.send({ success: true, message: "Order placed successfully", id: result.insertedId });
//     });

//     // ✅ Get all orders (Admin dashboard)
//     app.get("/api/orders", async (req, res) => {
//       const orders = await orderCollection.find().toArray();
//       res.send(orders);
//     });

//     // ✅ Razorpay Order Creation (for online payments)
//     app.post("/api/payment/orders", async (req, res) => {
//       try {
//         const options = {
//           amount: req.body.amount * 100, // amount in paise
//           currency: "INR",
//           receipt: "receipt_order_" + Math.floor(Math.random() * 10000),
//         };
//         const order = await razorpay.orders.create(options);
//         res.json(order);
//       } catch (err) {
//         console.error("Razorpay error:", err);
//         res.status(500).send({ error: "Failed to create Razorpay order" });
//       }
//     });

//     // ✅ Verify Razorpay Payment (optional)
//     app.post("/api/payment/verify", async (req, res) => {
//       // You can add Razorpay signature verification here later
//       res.send({ success: true });
//     });

//     app.listen(port, () => {
//       console.log(`🚀 Server running on http://localhost:${port}`);
//     });
//   } catch (err) {
//     console.error("❌ MongoDB connection error:", err);
//   }





  
// }

// run().catch(console.dir);

// // ✅ Simulated order route (for now)
// app.post("/create-order", async (req, res) => {
//   const { bookId, userName, userEmail } = req.body;
//   console.log(`Order attempt for Book ID: ${bookId} by ${userName}`);

//   // Simulate payment pending
//   res.status(200).send({
//     success: false,
//     message: "Payment feature not yet integrated. Please try again later.",
//   });
// });



// //handle search book




// app.get("/books", async (req, res) => {
//   const search = req.query.search;
//   if (!search)
//     return res.status(400).json({ message: "Missing search query" });

//   try {
//     const result = await bookCollection.findOne({
//       $or: [
//         { bookTitle: { $regex: new RegExp(search, "i") } },
//         { authorName: { $regex: new RegExp(search, "i") } },
//       ],
//     });

//     if (!result) return res.status(404).json({ message: "Book not found" });
//     res.json(result);
//   } catch (err) {
//     console.error("Error searching:", err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });



//type 3


const express = require("express");
const cors = require("cors");
// const nodemailer = require("nodemailer");
// const Razorpay = require("razorpay");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5001;

// ✅ Enable CORS
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
}));
app.use(express.json());

// ✅ MongoDB setup
const uri = "mongodb+srv://mern-book-store:UZTCnITHdQYoHk45@cluster0.mqxe7uu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let bookCollection; // 👈 define globally
let orderCollection;

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB successfully");

    // initialize collections
    bookCollection = client.db("BookInventory").collection("books");
    orderCollection = client.db("BookInventory").collection("orders");

    // ✅ Default route
    app.get("/", (req, res) => {
      res.send("📚 Book Store Backend is running — by Ujjwal Pandey ✅");
    });

    // ✅ Upload a book
    app.post("/upload-book", async (req, res) => {
      try {
        const data = req.body;
        const result = await bookCollection.insertOne(data);
        res.send(result);
      } catch (err) {
        console.error("Error inserting book:", err);
        res.status(500).send({ message: "Failed to upload book" });
      }
    });

    // ✅ Get all books
    app.get("/all-books", async (req, res) => {
      try {
        const query = req.query?.category ? { category: req.query.category } : {};
        const result = await bookCollection.find(query).toArray();
        res.send(result);
      } catch (err) {
        console.error("Error fetching books:", err);
        res.status(500).send({ message: "Failed to fetch books" });
      }
    });

    // ✅ Get single book
    app.get("/book/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const result = await bookCollection.findOne({ _id: new ObjectId(id) });
        res.send(result);
      } catch (err) {
        console.error("Error fetching book:", err);
        res.status(500).send({ message: "Failed to fetch book" });
      }
    });




    // ✅ Search book by title or author
    app.get("/books", async (req, res) => {
      const search = req.query.search;
      if (!search)
        return res.status(400).json({ message: "Missing search query" });

      try {
        const result = await bookCollection.findOne({
          $or: [
            { bookTitle: { $regex: new RegExp(search, "i") } },
            { authorName: { $regex: new RegExp(search, "i") } },
          ],
        });

        if (!result) return res.status(404).json({ message: "Book not found" });

        res.json(result);
      } catch (err) {
        console.error("Error searching:", err);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });

    







    // ✅ Update a book
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      const updateBook = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = { $set: updateBook };
      const result = await bookCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    // ✅ Delete a book
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const result = await bookCollection.deleteOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // ✅ Place Order
    app.post("/api/orders", async (req, res) => {
      const order = req.body;
      if (!order.user || !order.bookId || !order.paymentMethod)
        return res.status(400).send({ message: "Missing order details" });

      const result = await orderCollection.insertOne(order);

      // Send confirmation email (optional)
      res.send({ success: true, message: "Order placed successfully", id: result.insertedId });
    });

    // ✅ Start server after connecting DB
    app.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

run().catch(console.dir);
