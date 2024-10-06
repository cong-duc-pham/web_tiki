#include <iostream>
using namespace std;

class MyTime {
private:
    int hours;
    int minutes;
    int seconds;  
public:
    MyTime() : hours(0), minutes(0), seconds(0) {}

    friend istream& operator>>(istream& is, MyTime& time) {
        do {
            cout << "Nhap gio: ";
            is >> time.hours;
            if (time.hours < 0 || time.hours > 24) {
                cout << "Gio khong hop le! Moi nhap lai!" << endl;
            }
        } while (time.hours < 0 || time.hours > 24);

        do {
            cout << "Nhap phut: ";
            is >> time.minutes;
            if (time.minutes < 0 || time.minutes >= 60) {
                cout << "Phut khong hop le! Moi nhap lai!" << endl;
            }
        } while (time.minutes < 0 || time.minutes >= 60);  

        do {
            cout << "Nhap giay: ";
            is >> time.seconds;
            if (time.seconds < 0 || time.seconds >= 60) {
                cout << "Giay khong hop le! Moi nhap lai!" << endl;
            }
        } while (time.seconds < 0 || time.seconds >= 60);  

        return is;
    }

    friend ostream& operator<<(ostream& os, const MyTime& time) {
        if (time.hours < 10) os << "0";
        os << time.hours << ":";
        if (time.minutes < 10) os << "0";
        os << time.minutes << ":";
        if (time.seconds < 10) os << "0";
        os << time.seconds;
        return os;
    }

    MyTime operator+(const MyTime& other) const {
        MyTime result;
        result.seconds = (seconds + other.seconds) % 60;
        int minuteCarry = (seconds + other.seconds) / 60;
        result.minutes = (minutes + other.minutes + minuteCarry) % 60;
        int hourCarry = (minutes + other.minutes + minuteCarry) / 60;
        result.hours = (hours + other.hours + hourCarry) % 24; 
        return result;
    }

    bool operator==(const MyTime& other) const {
        return hours == other.hours && minutes == other.minutes && seconds == other.seconds;
    }

    bool operator!=(const MyTime& other) const {
        return !(*this == other);
    }
};

class MyDate {
private:
    int day;
    int month;
    int year;

public:
    MyDate() : day(0), month(0), year(0) {}

    bool isLeapYear(int year) {
        return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    }

    friend istream& operator>>(istream& is, MyDate& date) {
        bool valid = false; 
        do {
            valid = true;  
            cout << "Nhap nam: ";
            is >> date.year;
            if (date.year < 0) {
                cout << "Nam khong hop le! Moi nhap lai!" << endl;
                valid = false;
            }

            if (valid) {
                cout << "Nhap thang: ";
                is >> date.month;
                if (date.month < 1 || date.month > 12) {
                    cout << "Thang khong hop le! Moi nhap lai!" << endl;
                    valid = false;
                }
            }

            if (valid) {
                cout << "Nhap ngay: ";
                is >> date.day;
                if (date.month == 1 || date.month == 3 || date.month == 5 || date.month == 7 || date.month == 8 || date.month == 10 || date.month == 12) {
                    if (date.day < 1 || date.day > 31) {
                        cout << "Ngay khong hop le! Moi nhap lai!" << endl;
                        valid = false;
                    }
                } else if (date.month == 4 || date.month == 6 || date.month == 9 || date.month == 11) {
                    if (date.day < 1 || date.day > 30) {
                        cout << "Ngay khong hop le! Moi nhap lai!" << endl;
                        valid = false;
                    }
                } else if (date.month == 2) {
                    if (date.isLeapYear(date.year)) {
                        if (date.day < 1 || date.day > 29) {
                            cout << "Ngay khong hop le! Moi nhap lai!" << endl;
                            valid = false;
                        }
                    } else {
                        if (date.day < 1 || date.day > 28) {
                            cout << "Ngay khong hop le! Moi nhap lai!" << endl;
                            valid = false;
                        }
                    }
                }
            }
        } while (!valid); 
        return is;
    }

    friend ostream& operator<<(ostream& os, const MyDate& date) {
        if (date.day < 10) os << "0";
        os << date.day << "/";
        if (date.month < 10) os << "0";
        os << date.month << "/";
        os << date.year;
        return os;
    }

    bool operator==(const MyDate& other) const {
        return day == other.day && month == other.month && year == other.year;
    }

    bool operator!=(const MyDate& other) const {
        return !(*this == other);
    }
};

class DateTime : public MyDate, public MyTime {
public:
    DateTime() {}

    void inputDateTime() {
        cout << "Nhap ngay: " << endl;
        cin >> static_cast<MyDate&>(*this);
        cout << "Nhap thoi gian: " << endl;
        cin >> static_cast<MyTime&>(*this);
    }

    void displayDateTime() const {
        cout << static_cast<const MyDate&>(*this) << " ";
        cout << static_cast<const MyTime&>(*this);
    }

    friend ostream& operator<<(ostream& os, const DateTime& dt) {
        os << static_cast<const MyDate&>(dt) << " ";
        os << static_cast<const MyTime&>(dt);
        return os;
    }

    DateTime operator+(const DateTime& other) const {
        DateTime result;
        result.MyDate::operator=(*this);
        result.MyTime::operator=(static_cast<MyTime>(*this) + static_cast<MyTime>(other));
        return result;
    }

    bool operator==(const DateTime& other) const {
        return static_cast<MyDate>(*this) == static_cast<MyDate>(other) && 
               static_cast<MyTime>(*this) == static_cast<MyTime>(other);
    }

    bool operator!=(const DateTime& other) const {
        return !(*this == other);
    }
};

int main() {
    DateTime dateTime1, dateTime2, totalDateTime;

    cout << "Nhap ngay thang va thoi gian cho doi tuong 1:" << endl;
    dateTime1.inputDateTime();  

    cout << "Nhap ngay thang va thoi gian cho doi tuong 2:" << endl;
    dateTime2.inputDateTime();  

    totalDateTime = dateTime1 + dateTime2;

    cout << "Ngay thang va thoi gian da nhap cho doi tuong 1:" << endl;
    cout << dateTime1 << endl;  

    cout << "Ngay thang va thoi gian da nhap cho doi tuong 2:" << endl;
    cout << dateTime2 << endl;  

    cout << "Tong ngay thang va thoi gian (doi tuong 1 + doi tuong 2):" << endl;
    cout << totalDateTime << endl;  

    if (dateTime1 == dateTime2) {
        cout << "Doi tuong 1 va doi tuong 2 bang nhau." << endl;
    } else {
        cout << "Doi tuong 1 va doi tuong 2 khong bang nhau." << endl;
    }
    system("pause");
    return 0;
}
