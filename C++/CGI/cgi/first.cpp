#include <iostream>
#include <cstdlib>

using namespace::std;

int main(int argc, char** argv)
{
    cout << "Content-type: text/html\n\n";
    cout << "<html><head><title>cgi response page</title></head>\n";
    cout << "<body><h1 align=\"center\">Response</h1>\n";
    char* str = getenv("QUERY_STRING");
    if(str == NULL)
    {
        cout << "<p>No QUERY_STRING found!</p>\n";
    }
    else
    {
        cout << "<p>QUERY_STRING (in 'GET' request) was <br />\n";
        cout << str; cout << "</p>\n";
    }
    cout << "</body></html>\n";
    return 0;
}
