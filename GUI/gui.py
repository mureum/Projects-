from tkinter import *
import sqlite3
from tkinter import messagebox

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
    if (checkuser(username,password))!=None:
        root.destroy()
        appwindow()     
    else:
        log_username.delete(0,END)
        log_password.delete(0,END)
        messagebox.showinfo('oops something wrong', 'Invalid credentials')

# Allows for registration and authentication
def register():
    name = register_name.get()
    username = register_username.get()
    password = register_password.get()
    repassword = register_repassword.get()
    if password == repassword and password != "" and len(password) > 5 and name != "" and username != "":
        adduser(name, username, password)
        messagebox.showinfo(':)', 'Registration Successful')
    else:
        if name == "" or username == "" or password == "" or repassword == "":
            messagebox.showinfo('oops something wrong', 'Field should not be empty')
        else:
            messagebox.showinfo('oops something wrong', 'Both passwords should be the same! \nPassword should contain at least 6 characters')
    reg_username.delete(0, END)
    reg_password.delete(0, END)
    reg_repassword.delete(0, END)
    reg_name.delete(0, END)

# Verifies user 
def checkuser(username, password):
    conn = sqlite3.connect("loginpage.db")
    cur = conn.cursor()
    cur.execute("SELECT * FROM users WHERE username=? AND password=?", (username, password))
    result = cur.fetchone()
    return result

# Selects all users in the login database.
def viewallusers():
    conn = sqlite3.connect("loginpage.db")
    cur = conn.cursor()
    cur.execute("SELECT * FROM users")
    rows = cur.fetchall()
    conn.commit()
    conn.close()
    return rows

# Deletes all records of users from the database
def deleteallusers():
    conn = sqlite3.connect("loginpage.db")
    cur = conn.cursor()
    cur.execute("DELETE FROM users")
    conn.commit()
    conn.close()
    messagebox.showinfo('Successful', 'All users deleted')

def viewwindow():
    gui = Toplevel(root)
    gui.title("VIEW ALL USERS")
    gui.geometry("800x700")
    Message(gui, font=("Castellar", 22, "bold"), text="NAME      USERNAME      PASSWORD", width=700).pack()
    for row in viewallusers():
        a = row[0]
        b = row[1]
        c = ""
        f = len(row[2])
        for i in range(f):
            c = c + "*"
        d = a + "         " + b + "           " + c
        Message(gui, font=("adobe clean", 25, "bold"), text=d, width=700).pack()
    Button(gui, text="Exit Window", font=("candara", 15, "bold"), command=gui.destroy).pack()
    
def appwindow():
    def connect1():
        conn=sqlite3.connect("budgetapp.db")
        cur=conn.cursor()
        cur.execute("CREATE TABLE IF NOT EXISTS budgettable(id INTEGER PRIMARY KEY,itemname TEXT,date TEXT,cost TEXT)")
        conn.commit()
        conn.close()
    connect1()

    def insert(itemname,date,cost):
        conn=sqlite3.connect("budgetapp.db")
        cur=conn.cursor()
        cur.execute("INSERT INTO budgettable VALUES(NULL,?,?,?)",(itemname,date,cost))
        conn.commit()
        conn.close()
    
    def view():
        conn=sqlite3.connect("budgetapp.db")
        cur=conn.cursor()
        cur.execute("SELECT * FROM budgettable")
        rows=cur.fetchall()
        conn.commit()
        conn.close()
        return rows

    def insertitems():
        a=exp_itemname.get()
        b=purchase_date.get()
        c=purchase_cost.get()
        d=c.replace('.', '', 1)
        e=b.count('-')      

        if a=="" or b=="" or c=="":
            messagebox.showinfo("oops something wrong","Field should not be empty")
        elif len(b)!=10 or e!=2:
            messagebox.showinfo("oops something wrong","DATE should be in format dd-mm-yyyy")
        elif (d.isdigit()==False):
            messagebox.showinfo("oops something wrong","Cost should be a number")
        else:
            insert(a,b,c)
            product_name.delete(0,END)
            product_date.delete(0,END)
            product_cost.delete(0,END)
        list.delete(0,END)
    
    def viewallitems():
        list.delete(0, END)
        list.insert(END, "ID   NAME     DATE      COST")
        for item in view():  
            item_id = str(item[0])
            item_name = str(item[1])
            item_date = str(item[2])
            item_cost = str(item[3])
            formatted_item = item_id + "     " + item_name + "    " + item_date + "    " + item_cost
            list.insert(END, formatted_item)
    
    def deletealldata():
        conn=sqlite3.connect("budgetapp.db")
        cur=conn.cursor()
        cur.execute("DELETE FROM budgettable")
        conn.commit()
        conn.close()
        list.delete(0,END)
        messagebox.showinfo('Successful', 'All data deleted')
    
    gui = Tk()
    gui.title("Budget Manager")
    gui.geometry("900x700")
    Label(gui,font=("comic sans ms",17),text="Product name").place(x=10,y=150)
    exp_itemname = StringVar()
    product_name = Entry(gui,font=("comic sans ms",15),textvariable=exp_itemname)
    product_name.place(x=220,y=155,height=27,width=165)
    Label(gui,font=("comic sans ms",17),text="Date(dd-mm-yyyy)").place(x=10,y=200)
    purchase_date = StringVar()
    product_date = Entry(gui,font=("comic sans ms",15),textvariable=purchase_date)
    product_date.place(x=220,y=205,height=27,width=165)
    Label(gui,font=("comic sans ms",17),text="Cost of product").place(x=10,y=250)
    purchase_cost = StringVar()
    product_cost = Entry(gui,font=("comic sans ms",15),textvariable=purchase_cost)
    product_cost.place(x=220,y=255,height=27,width=165)
    scroll_bar=Scrollbar(gui)
    scroll_bar.place(x=651,y=410,height=277,width=20) 
    item_id=StringVar()
    spinbox = Spinbox(gui, font=("comic sans ms",17),from_= 0, to_ = 200,textvariable=item_id,justify=CENTER)
    spinbox.place(x=745,y=174,height=30,width=50)
    list = Listbox(gui,height=7,width=30,font=("comic sans ms",20),yscrollcommand = scroll_bar.set)
    list.place(x=168,y=410)
    scroll_bar.config( command = list.yview )
    Button(gui,text="Add Item",font=("comic sans ms",17),width=10,command=insertitems).place(x=30,y=300)
    Button(gui,text="View all items",font=("comic sans ms",17), width=12,command=viewallitems).place(x=110,y=355)
    Button(gui,text="Delete all items",font=("comic sans ms",17),width=15,command=deletealldata).place(x=550,y=280)

root = Tk()
root.title("LOGIN")
root.geometry("1000x700")

# Username and password section
Label(root, font=("comic sans ms", 19), text="Username").place(x=80, y=230)
Label(root, font=("comic sans ms", 19), text="Password").place(x=80, y=280)

login_username = StringVar()
log_username = Entry(root, font=("comic sans ms", 15), textvariable=login_username)
log_username.place(x=205, y=238, height=25, width=165)

login_password = StringVar()
log_password = Entry(root, font=("comic sans ms", 15), textvariable=login_password, show="*")
log_password.place(x=205, y=287, height=25, width=165)

Button(root, text="Login", font=("comic sans ms", 19), width=12, command=login).place(x=110, y=360)

# Registration Section 
Label(root, font=("comic sans ms", 19), text="Name").place(x=653, y=195)
Label(root, font=("comic sans ms", 19), text="Username").place(x=604, y=243)
Label(root, font=("comic sans ms", 19), text="Password").place(x=610, y=293)
Label(root, font=("comic sans ms", 17), text="Confirm password").place(x=532, y=342)

register_name = StringVar()
reg_name = Entry(root, font=("adobe clean", 15), textvariable=register_name)
reg_name.place(x=740, y=200, height=25, width=165)

register_username = StringVar()
reg_username = Entry(root, font=("adobe clean", 15), textvariable=register_username)
reg_username.place(x=740, y=250, height=25, width=165)

register_password = StringVar()
reg_password = Entry(root, font=("adobe clean", 15), textvariable=register_password, show="*")
reg_password.place(x=740, y=300, height=25, width=165)

register_repassword = StringVar()
reg_repassword = Entry(root, font=("adobe clean", 15), textvariable=register_repassword, show="*")
reg_repassword.place(x=740, y=350, height=25, width=165)

Button(root, text="Register", font=("adobe clean", 19), width=12, command = register).place(x=630, y=400)
Button(root, text="Delete all users", font=("candara", 15, "bold"), command=deleteallusers).place(x=130, y=620)
Button(root, text="View all users", font=("candara", 15, "bold"),command = viewwindow).place(x=130, y=560)

# Start the main event loop
root.resizable(False, False)
root.mainloop()
