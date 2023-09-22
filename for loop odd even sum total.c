#include<stdio.h>
int main()
{
	int i,n,even=0,odd=0,even_sum=0,odd_sum=0;
	printf("\n Enter the ending value:");
	scanf("%d",&n);
	printf("\n Even number:");
	for(i=0;i<=n;i++)
	{
		if(i%2==0){
			printf("\n%d",i);
			even++;
			even_sum=even_sum+i;
			
		}
	}
	printf("\n odd number:");
	for(i=0;i<=n;i++)
	{
		if(i%2==1){
			printf("\n%d",i);
			odd++;
			odd_sum=odd_sum+i;
			
		}
	}
	printf("\n Total even numbers:%d",even);
	printf("\n Total odd numbers:%d",odd);
	printf("\n Total sum of even numbers:%d",even_sum);
	printf("\n Total sum of odd numbers:%d",odd_sum);
	
	return 0;
}
