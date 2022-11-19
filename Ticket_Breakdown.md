# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
I've honestly never worked on tickets before but I will make some informed guesses.

I think every Agent should still be assigned a database id, but we could add a
new column to the Agent table to store custom ids.
I think this solution wouldn't take too long to accomplish.
The table would just need to be altered.

Ex: 
ALTER TABLE Agent
ADD customID INTEGER;

Then a procedure could be created to insert data into the customID column.

Ex:
CREATE OR REPLACE PROCEDURE add_customID(
    customID INTEGER
)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO Agent(
        customID
    )
VALUES (
    customID
    );
END;
$$;

The procedure would then be called any time a Facility would like to assign a custom
id to an Agent.

Ex:
CALL add_customID(1234)

I would greatly appreciate any feedback! Thank you so much for this opportunity!