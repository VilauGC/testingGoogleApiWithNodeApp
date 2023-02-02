const express = require("express");
const router = express.Router();

const { google } = require("googleapis");
const credentials = require("./service_account.json");
const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
const auth = new google.auth.JWT(
  credentials.client_email,
  null,
  credentials.private_key,
  scopes
);

async function getRecords(client) {
  const googleSheetApi = google.sheets({ version: "v4", auth: client });
  const readOptions = {
    spreadsheetId: "1NHgSl0uMgcPa-XdtPYmFe2BLXuFS7oQ_V6yBczcw4bQ",
    range: "Foaie1!A1:B1",
  };

  let dataFromSheet = await googleSheetApi.spreadsheets.values.get(readOptions);
  let allRecords = dataFromSheet.data.values;
  return allRecords;
}

router.get("/get", async (req, res) => {
  try {
    // facem autorizarea
    auth.authorize((error, tokens) => {
      if (error) {
        console.log(error);
        res.json(error);
      } else {
        console.log("Connected!");
        const dataReturned = getRecords(auth);
        dataReturned.then((valori) => {
          res.json(valori);
        });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
