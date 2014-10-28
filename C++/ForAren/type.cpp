#include<iostream>
#include<typeinfo>  

template <typename F, typename S> double Sum (F first, S second);

int main() {
    std::cout<<Sum(5,5.5);
    return 0;
}

template <typename F, typename S> double Sum (F first, S second) {
    char type_first = *typeid(first).name();
    char type_second = *typeid(second).name();
    if (type_first == 'c' || type_second == 'c') {
        std::cout<<"One or more parameters are type of char";
        return 0;
    }
    return first + second;
}
