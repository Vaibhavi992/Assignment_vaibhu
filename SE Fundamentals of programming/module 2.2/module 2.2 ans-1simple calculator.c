#include<stdio.h>
int main()
{
	int num1,num2,addition,substraction,multiply;
	float divide,modulo;
	
	printf("Enter num1\n");
	scanf("%d",&num1);
	printf("Enter num2\n");
	scanf("%d",&num2);
	addition=num1+num2;
	substraction=num1-num2;
	multiply=num1*num2;
	divide=num1/num2;
	modulo=num1%num2;
	printf("The addition of two num is=%d\n",addition);
	printf("The substraction of two num is=%d\n",substraction);
	printf("The multiply of two num is=%d\n",multiply);
	printf("The division of two num is=%f\n",divide);
	printf("The modulo of two num is=%f\n",modulo);
	return 0;
}
