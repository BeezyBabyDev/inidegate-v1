// Airtable Configuration for IndieGate Access Requests and User Management
export const airtableConfig = {
  apiToken: "patb48wYz72BIpkF7.ad9225851933812d26f7cabe42247eeee156ac7a98fac546568216190c29d4b4",
  baseId: "apprV1zn5cbpYhZ7f",
  tableId: "tbldunI1ZC9l1utWr", // Access Requests table
  usersTableId: "tblUsers" // Users table (will be created)
};
export const isAirtableConfigured = () => airtableConfig.apiToken && airtableConfig.baseId && airtableConfig.tableId;
export const submitToAirtable = async (formData) => {
  const url = `https://api.airtable.com/v0/${airtableConfig.baseId}/${airtableConfig.tableId}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Authorization": `Bearer ${airtableConfig.apiToken}`, "Content-Type": "application/json" },
    body: JSON.stringify({ fields: { Name: formData.name, Email: formData.email, Company: formData.company || "", Role: formData.role || "", Message: formData.message || "", Submitted: new Date().toISOString() } })
  });
  if (!response.ok) throw new Error(`Airtable error: ${response.status}`);
  return await response.json();
};
