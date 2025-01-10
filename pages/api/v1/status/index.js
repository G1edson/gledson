import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as soma;");
  console.log(result.rows);

  const updatedAt = new Date().toISOString();

  response.status(200).json({
    updated_at: updatedAt,
  });
}

export default status;
