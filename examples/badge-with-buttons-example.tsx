import React from 'react';
import { BadgeWithButtons } from '@/components/ui/badge-with-buttons';

export default function BadgeWithButtonsExample() {
  return (
    <div className="flex flex-col space-y-6 p-6">
      <div>
        <h2 className="text-lg font-semibold mb-3">Basic Badge with Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <BadgeWithButtons 
            label="Pending" 
            onAccept={() => alert('Accepted')}
            onReject={() => alert('Rejected')}
          />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-3">Different Variants</h2>
        <div className="flex flex-wrap gap-4">
          <BadgeWithButtons 
            label="Default" 
            variant="default"
            onAccept={() => alert('Accepted')}
            onReject={() => alert('Rejected')}
          />
          <BadgeWithButtons 
            label="Secondary" 
            variant="secondary"
            onAccept={() => alert('Accepted')}
            onReject={() => alert('Rejected')}
          />
          <BadgeWithButtons 
            label="Destructive" 
            variant="destructive"
            onAccept={() => alert('Accepted')}
            onReject={() => alert('Rejected')}
          />
          <BadgeWithButtons 
            label="Outline" 
            variant="outline"
            onAccept={() => alert('Accepted')}
            onReject={() => alert('Rejected')}
          />
          <BadgeWithButtons 
            label="Success" 
            variant="success"
            onAccept={() => alert('Accepted')}
            onReject={() => alert('Rejected')}
          />
          <BadgeWithButtons 
            label="Warning" 
            variant="warning"
            onAccept={() => alert('Accepted')}
            onReject={() => alert('Rejected')}
          />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-3">Different Sizes</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <BadgeWithButtons 
            label="Small" 
            size="sm"
            onAccept={() => alert('Accepted')}
            onReject={() => alert('Rejected')}
          />
          <BadgeWithButtons 
            label="Default" 
            size="default"
            onAccept={() => alert('Accepted')}
            onReject={() => alert('Rejected')}
          />
          <BadgeWithButtons 
            label="Large" 
            size="lg"
            onAccept={() => alert('Accepted')}
            onReject={() => alert('Rejected')}
          />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-3">With Different Button Combinations</h2>
        <div className="flex flex-wrap gap-4">
          <BadgeWithButtons 
            label="Accept Only" 
            onAccept={() => alert('Accepted')}
          />
          <BadgeWithButtons 
            label="Reject Only" 
            onReject={() => alert('Rejected')}
          />
          <BadgeWithButtons 
            label="Info Only" 
            onInfo={() => alert('Info clicked')}
          />
          <BadgeWithButtons 
            label="Accept & Info" 
            onAccept={() => alert('Accepted')}
            onInfo={() => alert('Info clicked')}
          />
          <BadgeWithButtons 
            label="All Buttons" 
            onAccept={() => alert('Accepted')}
            onReject={() => alert('Rejected')}
            onInfo={() => alert('Info clicked')}
          />
        </div>
      </div>
    </div>
  );
}

