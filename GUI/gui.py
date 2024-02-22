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

# Adds user entries to the loginpage database
def adduser(name, username, password):
    conn = sqlite3.connect("loginpage.db")
    cur = conn.cursor()
    cur.execute("INSERT INTO users VALUES(?,?,?)", (name, username, password))
    conn.commit()
    conn.close()

# User can fetch their username from the loginpage database
def getusername(username, password):
    conn = sqlite3.connect("loginpage.db")
    cur = conn.cursor()
    cur.execute("SELECT * FROM users WHERE username=? AND password=?", (username, password))
    result = cur.fetchone()
    global profilename
    if result is not None:
        profilename = result[0]

def login():
    username = login_username.get()
    password = login_password.get()
    getusername(username, password)
    
def appwindow():
    # The features of the application will be in this function
    pass


root = Tk()
root.title("LOGIN")
root.geometry("500x500")

Label(root, font=("comic sans ms", 19), text="Username").place(x=80, y=230)
Label(root, font=("comic sans ms", 19), text="Password").place(x=80, y=280)

login_username = StringVar()
log_username = Entry(root, font=("comic sans ms", 15), textvariable=login_username)
log_username.place(x=205, y=238, height=25, width=165)

login_password = StringVar()
log_password = Entry(root, font=("comic sans ms", 15), textvariable=login_password, show="*")
log_password.place(x=205, y=287, height=25, width=165)

Button(root, text="Login", font=("Arial", 19), width=12, command=login).place(x=110, y=360)

# Start the main event loop
root.mainloop()
