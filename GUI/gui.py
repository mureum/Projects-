from tkinter import *
import sqlite3

# Created a database connection to store user data in the "loginpage" database 

def connect():
    conn = sqlite3.connect("loginpage.db")
    cur = conn.cursor()

    # Creates the table and commits to changes to the database
    cur.execute("CREATE TABLE IF NOT EXISTS users(name TEXT,username TEXT,password TEXT)")
    conn.commit()

    # Closes the database connection -> It's good practise to close connectiuon when no longer needed

    conn.close()

# Ensures database connection is established
connect()

def appwindow():
    # The features of the application will be in this function
    pass

root = Tk()
root.title("LOGIN")
root.geometry("500x500")



# Start the main event loop
root.mainloop()
